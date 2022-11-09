import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigVariableTemplate } from "./configvariabletemplate";

export enum AuthConfigTemplateAuthTypeEnum {
    AuthTypeUnspecified = "AUTH_TYPE_UNSPECIFIED"
,    UserPassword = "USER_PASSWORD"
,    Oauth2JwtBearer = "OAUTH2_JWT_BEARER"
,    Oauth2ClientCredentials = "OAUTH2_CLIENT_CREDENTIALS"
,    SshPublicKey = "SSH_PUBLIC_KEY"
,    Oauth2AuthCodeFlow = "OAUTH2_AUTH_CODE_FLOW"
}


// AuthConfigTemplate
/** 
 * AuthConfigTemplate defines required field over an authentication type.
**/
export class AuthConfigTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=authType" })
  authType?: AuthConfigTemplateAuthTypeEnum;

  @Metadata({ data: "json, name=configVariableTemplates", elemType: shared.ConfigVariableTemplate })
  configVariableTemplates?: ConfigVariableTemplate[];
}
