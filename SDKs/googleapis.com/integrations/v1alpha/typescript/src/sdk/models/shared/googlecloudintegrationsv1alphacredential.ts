import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAuthToken } from "./googlecloudintegrationsv1alphaauthtoken";
import { GoogleCloudIntegrationsV1alphaJwt } from "./googlecloudintegrationsv1alphajwt";
import { GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode } from "./googlecloudintegrationsv1alphaoauth2authorizationcode";
import { GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials } from "./googlecloudintegrationsv1alphaoauth2clientcredentials";
import { GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials } from "./googlecloudintegrationsv1alphaoauth2resourceownercredentials";
import { GoogleCloudIntegrationsV1alphaOidcToken } from "./googlecloudintegrationsv1alphaoidctoken";
import { GoogleCloudIntegrationsV1alphaServiceAccountCredentials } from "./googlecloudintegrationsv1alphaserviceaccountcredentials";
import { GoogleCloudIntegrationsV1alphaUsernameAndPassword } from "./googlecloudintegrationsv1alphausernameandpassword";


export enum GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum {
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


// GoogleCloudIntegrationsV1alphaCredential
/** 
 * Defines parameters for a single, canonical credential.
**/
export class GoogleCloudIntegrationsV1alphaCredential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authToken" })
  authToken?: GoogleCloudIntegrationsV1alphaAuthToken;

  @SpeakeasyMetadata({ data: "json, name=credentialType" })
  credentialType?: GoogleCloudIntegrationsV1alphaCredentialCredentialTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=jwt" })
  jwt?: GoogleCloudIntegrationsV1alphaJwt;

  @SpeakeasyMetadata({ data: "json, name=oauth2AuthorizationCode" })
  oauth2AuthorizationCode?: GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode;

  @SpeakeasyMetadata({ data: "json, name=oauth2ClientCredentials" })
  oauth2ClientCredentials?: GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials;

  @SpeakeasyMetadata({ data: "json, name=oauth2ResourceOwnerCredentials" })
  oauth2ResourceOwnerCredentials?: GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials;

  @SpeakeasyMetadata({ data: "json, name=oidcToken" })
  oidcToken?: GoogleCloudIntegrationsV1alphaOidcToken;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountCredentials" })
  serviceAccountCredentials?: GoogleCloudIntegrationsV1alphaServiceAccountCredentials;

  @SpeakeasyMetadata({ data: "json, name=usernameAndPassword" })
  usernameAndPassword?: GoogleCloudIntegrationsV1alphaUsernameAndPassword;
}
