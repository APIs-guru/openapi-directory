import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceServerRepresentation } from "./resourceserverrepresentation";
import { ProtocolMapperRepresentation } from "./protocolmapperrepresentation";


export class ClientRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: Map<string, any>;

  @Metadata({ data: "json, name=adminUrl" })
  adminUrl?: string;

  @Metadata({ data: "json, name=alwaysDisplayInConsole" })
  alwaysDisplayInConsole?: boolean;

  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=authenticationFlowBindingOverrides" })
  authenticationFlowBindingOverrides?: Map<string, any>;

  @Metadata({ data: "json, name=authorizationServicesEnabled" })
  authorizationServicesEnabled?: boolean;

  @Metadata({ data: "json, name=authorizationSettings" })
  authorizationSettings?: ResourceServerRepresentation;

  @Metadata({ data: "json, name=baseUrl" })
  baseUrl?: string;

  @Metadata({ data: "json, name=bearerOnly" })
  bearerOnly?: boolean;

  @Metadata({ data: "json, name=clientAuthenticatorType" })
  clientAuthenticatorType?: string;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=consentRequired" })
  consentRequired?: boolean;

  @Metadata({ data: "json, name=defaultClientScopes" })
  defaultClientScopes?: string[];

  @Metadata({ data: "json, name=defaultRoles" })
  defaultRoles?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=directAccessGrantsEnabled" })
  directAccessGrantsEnabled?: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=frontchannelLogout" })
  frontchannelLogout?: boolean;

  @Metadata({ data: "json, name=fullScopeAllowed" })
  fullScopeAllowed?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=implicitFlowEnabled" })
  implicitFlowEnabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nodeReRegistrationTimeout" })
  nodeReRegistrationTimeout?: number;

  @Metadata({ data: "json, name=notBefore" })
  notBefore?: number;

  @Metadata({ data: "json, name=optionalClientScopes" })
  optionalClientScopes?: string[];

  @Metadata({ data: "json, name=origin" })
  origin?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=protocolMappers", elemType: shared.ProtocolMapperRepresentation })
  protocolMappers?: ProtocolMapperRepresentation[];

  @Metadata({ data: "json, name=publicClient" })
  publicClient?: boolean;

  @Metadata({ data: "json, name=redirectUris" })
  redirectUris?: string[];

  @Metadata({ data: "json, name=registeredNodes" })
  registeredNodes?: Map<string, any>;

  @Metadata({ data: "json, name=registrationAccessToken" })
  registrationAccessToken?: string;

  @Metadata({ data: "json, name=rootUrl" })
  rootUrl?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=serviceAccountsEnabled" })
  serviceAccountsEnabled?: boolean;

  @Metadata({ data: "json, name=standardFlowEnabled" })
  standardFlowEnabled?: boolean;

  @Metadata({ data: "json, name=surrogateAuthRequired" })
  surrogateAuthRequired?: boolean;

  @Metadata({ data: "json, name=webOrigins" })
  webOrigins?: string[];
}
