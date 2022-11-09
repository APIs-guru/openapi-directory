import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigVariable } from "./configvariable";
import { Oauth2ClientCredentials } from "./oauth2clientcredentials";
import { Oauth2JwtBearer } from "./oauth2jwtbearer";
import { SshPublicKey } from "./sshpublickey";
import { UserPassword } from "./userpassword";

export enum AuthConfigAuthTypeEnum {
    AuthTypeUnspecified = "AUTH_TYPE_UNSPECIFIED"
,    UserPassword = "USER_PASSWORD"
,    Oauth2JwtBearer = "OAUTH2_JWT_BEARER"
,    Oauth2ClientCredentials = "OAUTH2_CLIENT_CREDENTIALS"
,    SshPublicKey = "SSH_PUBLIC_KEY"
,    Oauth2AuthCodeFlow = "OAUTH2_AUTH_CODE_FLOW"
}


// AuthConfig
/** 
 * AuthConfig defines details of a authentication type.
**/
export class AuthConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalVariables", elemType: shared.ConfigVariable })
  additionalVariables?: ConfigVariable[];

  @Metadata({ data: "json, name=authType" })
  authType?: AuthConfigAuthTypeEnum;

  @Metadata({ data: "json, name=oauth2ClientCredentials" })
  oauth2ClientCredentials?: Oauth2ClientCredentials;

  @Metadata({ data: "json, name=oauth2JwtBearer" })
  oauth2JwtBearer?: Oauth2JwtBearer;

  @Metadata({ data: "json, name=sshPublicKey" })
  sshPublicKey?: SshPublicKey;

  @Metadata({ data: "json, name=userPassword" })
  userPassword?: UserPassword;
}
