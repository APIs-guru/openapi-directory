import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaCredential } from "./googlecloudintegrationsv1alphacredential";
export declare enum GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum {
    CredentialTypeUnspecified = "CREDENTIAL_TYPE_UNSPECIFIED",
    UsernameAndPassword = "USERNAME_AND_PASSWORD",
    ApiKey = "API_KEY",
    Oauth2AuthorizationCode = "OAUTH2_AUTHORIZATION_CODE",
    Oauth2Implicit = "OAUTH2_IMPLICIT",
    Oauth2ClientCredentials = "OAUTH2_CLIENT_CREDENTIALS",
    Oauth2ResourceOwnerCredentials = "OAUTH2_RESOURCE_OWNER_CREDENTIALS",
    Jwt = "JWT",
    AuthToken = "AUTH_TOKEN",
    ServiceAccount = "SERVICE_ACCOUNT",
    ClientCertificateOnly = "CLIENT_CERTIFICATE_ONLY",
    OidcToken = "OIDC_TOKEN"
}
export declare enum GoogleCloudIntegrationsV1alphaAuthConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Valid = "VALID",
    Invalid = "INVALID",
    SoftDeleted = "SOFT_DELETED",
    Expired = "EXPIRED",
    Unauthorized = "UNAUTHORIZED",
    Unsupported = "UNSUPPORTED"
}
export declare enum GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum {
    AuthConfigVisibilityUnspecified = "AUTH_CONFIG_VISIBILITY_UNSPECIFIED",
    Private = "PRIVATE",
    ClientVisible = "CLIENT_VISIBLE"
}
/**
 * The AuthConfig resource use to hold channels and connection config data.
**/
export declare class GoogleCloudIntegrationsV1alphaAuthConfig extends SpeakeasyBase {
    certificateId?: string;
    createTime?: string;
    creatorEmail?: string;
    credentialType?: GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum;
    decryptedCredential?: GoogleCloudIntegrationsV1alphaCredential;
    description?: string;
    displayName?: string;
    encryptedCredential?: string;
    expiryNotificationDuration?: string[];
    lastModifierEmail?: string;
    name?: string;
    overrideValidTime?: string;
    reason?: string;
    state?: GoogleCloudIntegrationsV1alphaAuthConfigStateEnum;
    updateTime?: string;
    validTime?: string;
    visibility?: GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum;
}
/**
 * The AuthConfig resource use to hold channels and connection config data.
**/
export declare class GoogleCloudIntegrationsV1alphaAuthConfigInput extends SpeakeasyBase {
    certificateId?: string;
    creatorEmail?: string;
    credentialType?: GoogleCloudIntegrationsV1alphaAuthConfigCredentialTypeEnum;
    decryptedCredential?: GoogleCloudIntegrationsV1alphaCredential;
    description?: string;
    displayName?: string;
    encryptedCredential?: string;
    expiryNotificationDuration?: string[];
    lastModifierEmail?: string;
    name?: string;
    overrideValidTime?: string;
    reason?: string;
    state?: GoogleCloudIntegrationsV1alphaAuthConfigStateEnum;
    validTime?: string;
    visibility?: GoogleCloudIntegrationsV1alphaAuthConfigVisibilityEnum;
}
