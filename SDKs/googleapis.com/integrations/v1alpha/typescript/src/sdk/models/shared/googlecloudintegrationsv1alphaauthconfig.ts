import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaCredential } from "./googlecloudintegrationsv1alphacredential";

export enum GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum {
    CredentialTypeUnspecified = "CREDENTIAL_TYPE_UNSPECIFIED"
,    UsernameAndPassword = "USERNAME_AND_PASSWORD"
,    ApiKey = "API_KEY"
,    Oauth2AuthorizationCode = "OAUTH2_AUTHORIZATION_CODE"
,    Oauth2Implicit = "OAUTH2_IMPLICIT"
,    Oauth2ClientCredentials = "OAUTH2_CLIENT_CREDENTIALS"
,    Oauth2ResourceOwnerCredentials = "OAUTH2_RESOURCE_OWNER_CREDENTIALS"
,    Jwt = "JWT"
,    AuthToken = "AUTH_TOKEN"
,    ServiceAccount = "SERVICE_ACCOUNT"
,    ClientCertificateOnly = "CLIENT_CERTIFICATE_ONLY"
,    OidcToken = "OIDC_TOKEN"
}

export enum GoogleCloudIntegrationsV1alphaAuthConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Valid = "VALID"
,    Invalid = "INVALID"
,    SoftDeleted = "SOFT_DELETED"
,    Expired = "EXPIRED"
,    Unauthorized = "UNAUTHORIZED"
,    Unsupported = "UNSUPPORTED"
}

export enum GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum {
    AuthConfigVisibilityUnspecified = "AUTH_CONFIG_VISIBILITY_UNSPECIFIED"
,    Private = "PRIVATE"
,    ClientVisible = "CLIENT_VISIBLE"
}


// GoogleCloudIntegrationsV1alphaAuthConfig
/** 
 * The AuthConfig resource use to hold channels and connection config data.
**/
export class GoogleCloudIntegrationsV1alphaAuthConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateId" })
  certificateId?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creatorEmail" })
  creatorEmail?: string;

  @Metadata({ data: "json, name=credentialType" })
  credentialType?: GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum;

  @Metadata({ data: "json, name=decryptedCredential" })
  decryptedCredential?: GoogleCloudIntegrationsV1alphaCredential;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=encryptedCredential" })
  encryptedCredential?: string;

  @Metadata({ data: "json, name=expiryNotificationDuration" })
  expiryNotificationDuration?: string[];

  @Metadata({ data: "json, name=lastModifierEmail" })
  lastModifierEmail?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=overrideValidTime" })
  overrideValidTime?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudIntegrationsV1alphaAuthConfigStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=validTime" })
  validTime?: string;

  @Metadata({ data: "json, name=visibility" })
  visibility?: GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum;
}
