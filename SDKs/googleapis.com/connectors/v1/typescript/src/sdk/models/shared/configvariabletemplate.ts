import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthorizationCodeLink } from "./authorizationcodelink";
import { EnumOption } from "./enumoption";
import { RoleGrant } from "./rolegrant";

export enum ConfigVariableTemplateStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Deprecated = "DEPRECATED"
}

export enum ConfigVariableTemplateValueTypeEnum {
    ValueTypeUnspecified = "VALUE_TYPE_UNSPECIFIED"
,    String = "STRING"
,    Int = "INT"
,    Bool = "BOOL"
,    Secret = "SECRET"
,    Enum = "ENUM"
,    AuthorizationCode = "AUTHORIZATION_CODE"
}


// ConfigVariableTemplate
/** 
 * ConfigVariableTemplate provides metadata about a `ConfigVariable` that is used in a Connection.
**/
export class ConfigVariableTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationCodeLink" })
  authorizationCodeLink?: AuthorizationCodeLink;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=enumOptions", elemType: shared.EnumOption })
  enumOptions?: EnumOption[];

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=required" })
  required?: boolean;

  @Metadata({ data: "json, name=roleGrant" })
  roleGrant?: RoleGrant;

  @Metadata({ data: "json, name=state" })
  state?: ConfigVariableTemplateStateEnum;

  @Metadata({ data: "json, name=validationRegex" })
  validationRegex?: string;

  @Metadata({ data: "json, name=valueType" })
  valueType?: ConfigVariableTemplateValueTypeEnum;
}
