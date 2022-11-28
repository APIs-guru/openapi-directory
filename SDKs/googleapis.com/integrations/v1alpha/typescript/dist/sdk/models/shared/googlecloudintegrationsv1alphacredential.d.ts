import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAuthToken } from "./googlecloudintegrationsv1alphaauthtoken";
import { GoogleCloudIntegrationsV1alphaJwt } from "./googlecloudintegrationsv1alphajwt";
import { GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode } from "./googlecloudintegrationsv1alphaoauth2authorizationcode";
import { GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials } from "./googlecloudintegrationsv1alphaoauth2clientcredentials";
import { GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials } from "./googlecloudintegrationsv1alphaoauth2resourceownercredentials";
import { GoogleCloudIntegrationsV1alphaOidcToken } from "./googlecloudintegrationsv1alphaoidctoken";
import { GoogleCloudIntegrationsV1alphaServiceAccountCredentials } from "./googlecloudintegrationsv1alphaserviceaccountcredentials";
import { GoogleCloudIntegrationsV1alphaUsernameAndPassword } from "./googlecloudintegrationsv1alphausernameandpassword";
export declare enum GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum {
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
/**
 * Defines parameters for a single, canonical credential.
**/
export declare class GoogleCloudIntegrationsV1alphaCredential extends SpeakeasyBase {
    authToken?: GoogleCloudIntegrationsV1alphaAuthToken;
    credentialType?: GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum;
    jwt?: GoogleCloudIntegrationsV1alphaJwt;
    oauth2AuthorizationCode?: GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode;
    oauth2ClientCredentials?: GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials;
    oauth2ResourceOwnerCredentials?: GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials;
    oidcToken?: GoogleCloudIntegrationsV1alphaOidcToken;
    serviceAccountCredentials?: GoogleCloudIntegrationsV1alphaServiceAccountCredentials;
    usernameAndPassword?: GoogleCloudIntegrationsV1alphaUsernameAndPassword;
}
