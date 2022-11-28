import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationCodeLink } from "./authorizationcodelink";
import { EnumOption } from "./enumoption";
import { RoleGrant } from "./rolegrant";
export declare enum ConfigVariableTemplateStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deprecated = "DEPRECATED"
}
export declare enum ConfigVariableTemplateValueTypeEnum {
    ValueTypeUnspecified = "VALUE_TYPE_UNSPECIFIED",
    String = "STRING",
    Int = "INT",
    Bool = "BOOL",
    Secret = "SECRET",
    Enum = "ENUM",
    AuthorizationCode = "AUTHORIZATION_CODE"
}
/**
 * ConfigVariableTemplate provides metadata about a `ConfigVariable` that is used in a Connection.
**/
export declare class ConfigVariableTemplate extends SpeakeasyBase {
    authorizationCodeLink?: AuthorizationCodeLink;
    description?: string;
    displayName?: string;
    enumOptions?: EnumOption[];
    key?: string;
    required?: boolean;
    roleGrant?: RoleGrant;
    state?: ConfigVariableTemplateStateEnum;
    validationRegex?: string;
    valueType?: ConfigVariableTemplateValueTypeEnum;
}
