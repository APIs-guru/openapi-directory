export const ppMetadataKey = "pathParam";

export function GetSimplePathParams(
    paramName: string,
    paramValue: any,
    explode: boolean
): Map<string, string> {
  const pathParams: Map<string, string> = new Map<string, string>();
  const ppVals: string[] = [];
  if (Array.isArray(paramValue)) {
    paramValue.forEach((param) => {
      ppVals.push(String(param));
    });
    pathParams.set(paramName, ppVals.join(","));
  } else if (paramValue instanceof Map) {
    paramValue.forEach((paramVal, paramName) => {
      if (explode) ppVals.push(`${paramName}=${paramVal}`);
      else ppVals.push(`${paramName},${paramVal}`);
    });
    pathParams.set(paramName, ppVals.join(","));
  } else if (paramValue instanceof Object) {
    Object.getOwnPropertyNames(paramValue).forEach((paramName: string) => {
      const paramFieldValue = paramValue[paramName];
      if (isEmpty(paramFieldValue)) return;
      else if (explode) ppVals.push(`${paramName}=${paramFieldValue}`);
      else ppVals.push(`${paramName},${paramFieldValue}`);
    });
    pathParams.set(paramName, ppVals.join(","));
  } else {
    pathParams.set(paramName, String(paramValue));
  }
  return pathParams;
}

function isEmpty(value: any): boolean {
  // check for undefined, null, and NaN
  let res: boolean = false;
  if (typeof value === 'number') res = Number.isNaN(value);
  else if (typeof value === 'string') res = value === "";
  return res || value == null;
}

export class ParamDecorator {
  Style: string;
  Explode: boolean;
  ParamName: string;
  Serialization?: string;
  constructor(
      Style: string,
      Explode: boolean,
      ParamName: string,
      Serialization?: string
  ) {
    this.Style = Style;
    this.Explode = Explode;
    this.ParamName = ParamName;
    this.Serialization = Serialization;
  }
}
