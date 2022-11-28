import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceServerRepresentation } from "./resourceserverrepresentation";
import { ProtocolMapperRepresentation } from "./protocolmapperrepresentation";



export class ClientRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=adminUrl" })
  adminUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=alwaysDisplayInConsole" })
  alwaysDisplayInConsole?: boolean;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=authenticationFlowBindingOverrides" })
  authenticationFlowBindingOverrides?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=authorizationServicesEnabled" })
  authorizationServicesEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=authorizationSettings" })
  authorizationSettings?: ResourceServerRepresentation;

  @SpeakeasyMetadata({ data: "json, name=baseUrl" })
  baseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=bearerOnly" })
  bearerOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clientAuthenticatorType" })
  clientAuthenticatorType?: string;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=consentRequired" })
  consentRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=defaultClientScopes" })
  defaultClientScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=defaultRoles" })
  defaultRoles?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=directAccessGrantsEnabled" })
  directAccessGrantsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=frontchannelLogout" })
  frontchannelLogout?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fullScopeAllowed" })
  fullScopeAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=implicitFlowEnabled" })
  implicitFlowEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeReRegistrationTimeout" })
  nodeReRegistrationTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=notBefore" })
  notBefore?: number;

  @SpeakeasyMetadata({ data: "json, name=optionalClientScopes" })
  optionalClientScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=protocolMappers", elemType: ProtocolMapperRepresentation })
  protocolMappers?: ProtocolMapperRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=publicClient" })
  publicClient?: boolean;

  @SpeakeasyMetadata({ data: "json, name=redirectUris" })
  redirectUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=registeredNodes" })
  registeredNodes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=registrationAccessToken" })
  registrationAccessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rootUrl" })
  rootUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountsEnabled" })
  serviceAccountsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=standardFlowEnabled" })
  standardFlowEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=surrogateAuthRequired" })
  surrogateAuthRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=webOrigins" })
  webOrigins?: string[];
}
