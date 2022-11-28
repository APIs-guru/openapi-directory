import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1ConfigVariable } from "./googlecloudconnectorsv1configvariable";
import { GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials } from "./googlecloudconnectorsv1authconfigoauth2clientcredentials";
import { GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer } from "./googlecloudconnectorsv1authconfigoauth2jwtbearer";
import { GoogleCloudConnectorsV1AuthConfigSshPublicKey } from "./googlecloudconnectorsv1authconfigsshpublickey";
import { GoogleCloudConnectorsV1AuthConfigUserPassword } from "./googlecloudconnectorsv1authconfiguserpassword";


export enum GoogleCloudConnectorsV1AuthConfigAuthTypeEnum {
    AuthTypeUnspecified = "AUTH_TYPE_UNSPECIFIED",
    UserPassword = "USER_PASSWORD",
    Oauth2JwtBearer = "OAUTH2_JWT_BEARER",
    Oauth2ClientCredentials = "OAUTH2_CLIENT_CREDENTIALS",
    SshPublicKey = "SSH_PUBLIC_KEY",
    Oauth2AuthCodeFlow = "OAUTH2_AUTH_CODE_FLOW"
}


// GoogleCloudConnectorsV1AuthConfig
/** 
 * AuthConfig defines details of a authentication type.
**/
export class GoogleCloudConnectorsV1AuthConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalVariables", elemType: GoogleCloudConnectorsV1ConfigVariable })
  additionalVariables?: GoogleCloudConnectorsV1ConfigVariable[];

  @SpeakeasyMetadata({ data: "json, name=authType" })
  authType?: GoogleCloudConnectorsV1AuthConfigAuthTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=oauth2ClientCredentials" })
  oauth2ClientCredentials?: GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials;

  @SpeakeasyMetadata({ data: "json, name=oauth2JwtBearer" })
  oauth2JwtBearer?: GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer;

  @SpeakeasyMetadata({ data: "json, name=sshPublicKey" })
  sshPublicKey?: GoogleCloudConnectorsV1AuthConfigSshPublicKey;

  @SpeakeasyMetadata({ data: "json, name=userPassword" })
  userPassword?: GoogleCloudConnectorsV1AuthConfigUserPassword;
}
