import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigVariable } from "./configvariable";
import { Oauth2ClientCredentials } from "./oauth2clientcredentials";
import { Oauth2JwtBearer } from "./oauth2jwtbearer";
import { SshPublicKey } from "./sshpublickey";
import { UserPassword } from "./userpassword";


export enum AuthConfigAuthTypeEnum {
    AuthTypeUnspecified = "AUTH_TYPE_UNSPECIFIED",
    UserPassword = "USER_PASSWORD",
    Oauth2JwtBearer = "OAUTH2_JWT_BEARER",
    Oauth2ClientCredentials = "OAUTH2_CLIENT_CREDENTIALS",
    SshPublicKey = "SSH_PUBLIC_KEY",
    Oauth2AuthCodeFlow = "OAUTH2_AUTH_CODE_FLOW"
}


// AuthConfig
/** 
 * AuthConfig defines details of a authentication type.
**/
export class AuthConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalVariables", elemType: ConfigVariable })
  additionalVariables?: ConfigVariable[];

  @SpeakeasyMetadata({ data: "json, name=authType" })
  authType?: AuthConfigAuthTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=oauth2ClientCredentials" })
  oauth2ClientCredentials?: Oauth2ClientCredentials;

  @SpeakeasyMetadata({ data: "json, name=oauth2JwtBearer" })
  oauth2JwtBearer?: Oauth2JwtBearer;

  @SpeakeasyMetadata({ data: "json, name=sshPublicKey" })
  sshPublicKey?: SshPublicKey;

  @SpeakeasyMetadata({ data: "json, name=userPassword" })
  userPassword?: UserPassword;
}
