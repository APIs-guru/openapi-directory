import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationCodeLink } from "./authorizationcodelink";
import { EnumOption } from "./enumoption";
import { RoleGrant } from "./rolegrant";


export enum ConfigVariableTemplateStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deprecated = "DEPRECATED"
}

export enum ConfigVariableTemplateValueTypeEnum {
    ValueTypeUnspecified = "VALUE_TYPE_UNSPECIFIED",
    String = "STRING",
    Int = "INT",
    Bool = "BOOL",
    Secret = "SECRET",
    Enum = "ENUM",
    AuthorizationCode = "AUTHORIZATION_CODE"
}


// ConfigVariableTemplate
/** 
 * ConfigVariableTemplate provides metadata about a `ConfigVariable` that is used in a Connection.
**/
export class ConfigVariableTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationCodeLink" })
  authorizationCodeLink?: AuthorizationCodeLink;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enumOptions", elemType: EnumOption })
  enumOptions?: EnumOption[];

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=roleGrant" })
  roleGrant?: RoleGrant;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ConfigVariableTemplateStateEnum;

  @SpeakeasyMetadata({ data: "json, name=validationRegex" })
  validationRegex?: string;

  @SpeakeasyMetadata({ data: "json, name=valueType" })
  valueType?: ConfigVariableTemplateValueTypeEnum;
}
