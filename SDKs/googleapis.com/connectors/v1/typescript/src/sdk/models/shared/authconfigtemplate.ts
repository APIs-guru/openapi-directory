import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigVariableTemplate } from "./configvariabletemplate";


export enum AuthConfigTemplateAuthTypeEnum {
    AuthTypeUnspecified = "AUTH_TYPE_UNSPECIFIED",
    UserPassword = "USER_PASSWORD",
    Oauth2JwtBearer = "OAUTH2_JWT_BEARER",
    Oauth2ClientCredentials = "OAUTH2_CLIENT_CREDENTIALS",
    SshPublicKey = "SSH_PUBLIC_KEY",
    Oauth2AuthCodeFlow = "OAUTH2_AUTH_CODE_FLOW"
}


// AuthConfigTemplate
/** 
 * AuthConfigTemplate defines required field over an authentication type.
**/
export class AuthConfigTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authType" })
  authType?: AuthConfigTemplateAuthTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=configVariableTemplates", elemType: ConfigVariableTemplate })
  configVariableTemplates?: ConfigVariableTemplate[];
}
