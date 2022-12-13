import { AxiosInstance } from "axios";

const securityMetadataKey = "security";

export function createSecurityClient(
  client: AxiosInstance,
  security: any
): AxiosInstance {
  return parseSecurityClass(client, security);
}

function parseSecurityDecorator(securityAnn: string): SecurityDecorator {
  // scheme=true;type=apiKey;subtype=header"
  let option = false;
  let scheme = false;
  let name = "";
  let securityType = "";
  let securitySubType = "";

  securityAnn.split(";").forEach((securityAnnPart) => {
    const [sKey, sVal]: string[] = securityAnnPart.split("=");
    switch (sKey) {
      case "name":
        name = sVal;
        break;
      case "type":
        securityType = sVal;
        break;
      case "subtype":
        securitySubType = sVal;
        break;
      case "option":
        option = sVal == "true";
        break;
      case "scheme":
        scheme = sVal == "true";
    }
  });

  return new SecurityDecorator(
    name,
    securityType,
    option,
    scheme,
    securitySubType
  );
}

function parseSecurityClass(
  client: AxiosInstance,
  security: any
): AxiosInstance {
  const fieldNames: string[] = Object.getOwnPropertyNames(security);
  fieldNames.forEach((fname) => {
    const securityAnn: string = Reflect.getMetadata(
      securityMetadataKey,
      security,
      fname
    );
    if (securityAnn == null) return;
    const securityDecorator: SecurityDecorator =
      parseSecurityDecorator(securityAnn);
    if (securityDecorator == null) return;
    if (securityDecorator.Option) {
      return parseSecurityOption(client, security[fname]);
    } else if (securityDecorator.Scheme) {
      return parseSecurityScheme(client, securityDecorator, security[fname]);
    }
  });

  return client;
}

function parseSecurityOption(
  client: AxiosInstance,
  optionType: any
): AxiosInstance {
  const fieldNames: string[] = Object.getOwnPropertyNames(optionType);
  fieldNames.forEach((fname) => {
    const securityAnn: string = Reflect.getMetadata(
      securityMetadataKey,
      optionType,
      fname
    );
    if (securityAnn == null) return;
    const securityDecorator: SecurityDecorator =
      parseSecurityDecorator(securityAnn);
    if (securityDecorator != null && securityDecorator.Scheme) return;
    if (securityDecorator.Scheme) {
      return parseSecurityScheme(client, securityDecorator, optionType[fname]);
    }
  });

  return client;
}

function parseSecurityScheme(
  client: AxiosInstance,
  schemeDecorator: SecurityDecorator,
  scheme: any
): AxiosInstance {
  if (schemeDecorator.Type === "http" && schemeDecorator.SubType === "basic") {
    return parseBasicAuthScheme(client, scheme);
  }

  const fieldNames: string[] = Object.getOwnPropertyNames(scheme);
  fieldNames.forEach((fname) => {
    const securityAnn: string = Reflect.getMetadata(
      securityMetadataKey,
      scheme,
      fname
    );
    if (securityAnn == null) return;
    const securityDecorator: SecurityDecorator =
      parseSecurityDecorator(securityAnn);
    if (securityDecorator == null || securityDecorator.Name === "") return;

    switch (schemeDecorator.Type) {
      case "apiKey":
        switch (schemeDecorator.SubType) {
          case "header":
            client.defaults.headers.common[securityDecorator.Name] =
              scheme[fname];
            break;
          case "query":
            client.defaults.params[securityDecorator.Name] = scheme[fname];
            break;
          case "cookie":
            const securityDecoratorName: string = securityDecorator.Name;
            const val: string = scheme[fname];
            client.defaults.headers.common[
              "Cookie"
            ] = `${securityDecoratorName}=${val}`;
            break;
          default:
            throw new Error("not supported");
        }
        break;
      case "openIdConnect":
        client.defaults.headers.common[securityDecorator.Name] = scheme[fname];
        break;
      case "oauth2":
        client.defaults.headers.common[securityDecorator.Name] = scheme[fname];
        break;
      case "http":
        switch (schemeDecorator.SubType) {
          case "basic":
            break;
          case "bearer":
            client.defaults.headers.common[securityDecorator.Name] =
              scheme[fname];
            break;
          default:
            throw new Error("not supported");
        }
        break;
      default:
        throw new Error("not supported");
    }
  });

  return client;
}

function parseBasicAuthScheme(
  client: AxiosInstance,
  scheme: any
): AxiosInstance {
  let username,
    password = "";

  const fieldNames: string[] = Object.getOwnPropertyNames(scheme);
  fieldNames.forEach((fname) => {
    const securityAnn: string = Reflect.getMetadata(
      securityMetadataKey,
      scheme,
      fname
    );
    if (securityAnn == null) return;
    const securityDecorator: SecurityDecorator =
      parseSecurityDecorator(securityAnn);
    if (securityDecorator == null || securityDecorator.Name === "") return;

    switch (securityDecorator.Name) {
      case "username":
        username = scheme[fname];
        break;
      case "password":
        password = scheme[fname];
        break;
    }
  });

  client.defaults.headers.common["Authorization"] = `Basic ${Buffer.from(
    `${username}:${password}`
  ).toString("base64")}`;

  return client;
}

class SecurityDecorator {
  Name: string;
  Type: string;
  Option: boolean;
  Scheme: boolean;
  SubType: string;
  constructor(
    Name: string,
    Type: string,
    Option: boolean,
    Scheme: boolean,
    SubType: string
  ) {
    this.Name = Name;
    this.Type = Type;
    this.Option = Option;
    this.Scheme = Scheme;
    this.SubType = SubType;
  }
}
