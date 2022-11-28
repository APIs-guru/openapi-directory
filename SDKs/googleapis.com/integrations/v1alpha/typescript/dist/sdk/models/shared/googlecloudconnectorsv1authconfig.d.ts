import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1ConfigVariable } from "./googlecloudconnectorsv1configvariable";
import { GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials } from "./googlecloudconnectorsv1authconfigoauth2clientcredentials";
import { GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer } from "./googlecloudconnectorsv1authconfigoauth2jwtbearer";
import { GoogleCloudConnectorsV1AuthConfigSshPublicKey } from "./googlecloudconnectorsv1authconfigsshpublickey";
import { GoogleCloudConnectorsV1AuthConfigUserPassword } from "./googlecloudconnectorsv1authconfiguserpassword";
export declare enum GoogleCloudConnectorsV1AuthConfigAuthTypeEnum {
    AuthTypeUnspecified = "AUTH_TYPE_UNSPECIFIED",
    UserPassword = "USER_PASSWORD",
    Oauth2JwtBearer = "OAUTH2_JWT_BEARER",
    Oauth2ClientCredentials = "OAUTH2_CLIENT_CREDENTIALS",
    SshPublicKey = "SSH_PUBLIC_KEY",
    Oauth2AuthCodeFlow = "OAUTH2_AUTH_CODE_FLOW"
}
/**
 * AuthConfig defines details of a authentication type.
**/
export declare class GoogleCloudConnectorsV1AuthConfig extends SpeakeasyBase {
    additionalVariables?: GoogleCloudConnectorsV1ConfigVariable[];
    authType?: GoogleCloudConnectorsV1AuthConfigAuthTypeEnum;
    oauth2ClientCredentials?: GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials;
    oauth2JwtBearer?: GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer;
    sshPublicKey?: GoogleCloudConnectorsV1AuthConfigSshPublicKey;
    userPassword?: GoogleCloudConnectorsV1AuthConfigUserPassword;
}
