import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ValidationOptionsSchemaValidationEnum {
    Unknown = "UNKNOWN"
,    Ignore = "IGNORE"
,    IgnoreWithWarnings = "IGNORE_WITH_WARNINGS"
,    Fail = "FAIL"
}

export enum ValidationOptionsUndeclaredPropertiesEnum {
    Unknown = "UNKNOWN"
,    Include = "INCLUDE"
,    Ignore = "IGNORE"
,    IncludeWithWarnings = "INCLUDE_WITH_WARNINGS"
,    IgnoreWithWarnings = "IGNORE_WITH_WARNINGS"
,    Fail = "FAIL"
}


// ValidationOptions
/** 
 * Options for how to validate and process properties on a resource.
**/
export class ValidationOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=schemaValidation" })
  schemaValidation?: ValidationOptionsSchemaValidationEnum;

  @Metadata({ data: "json, name=undeclaredProperties" })
  undeclaredProperties?: ValidationOptionsUndeclaredPropertiesEnum;
}
