import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigVariableTemplate } from "./configvariabletemplate";
export declare enum AuthConfigTemplateAuthTypeEnum {
    AuthTypeUnspecified = "AUTH_TYPE_UNSPECIFIED",
    UserPassword = "USER_PASSWORD",
    Oauth2JwtBearer = "OAUTH2_JWT_BEARER",
    Oauth2ClientCredentials = "OAUTH2_CLIENT_CREDENTIALS",
    SshPublicKey = "SSH_PUBLIC_KEY",
    Oauth2AuthCodeFlow = "OAUTH2_AUTH_CODE_FLOW"
}
/**
 * AuthConfigTemplate defines required field over an authentication type.
**/
export declare class AuthConfigTemplate extends SpeakeasyBase {
    authType?: AuthConfigTemplateAuthTypeEnum;
    configVariableTemplates?: ConfigVariableTemplate[];
}
