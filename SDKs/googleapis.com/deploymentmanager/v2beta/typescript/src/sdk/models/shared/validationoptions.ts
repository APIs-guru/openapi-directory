import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ValidationOptionsSchemaValidationEnum {
    Unknown = "UNKNOWN",
    Ignore = "IGNORE",
    IgnoreWithWarnings = "IGNORE_WITH_WARNINGS",
    Fail = "FAIL"
}

export enum ValidationOptionsUndeclaredPropertiesEnum {
    Unknown = "UNKNOWN",
    Include = "INCLUDE",
    Ignore = "IGNORE",
    IncludeWithWarnings = "INCLUDE_WITH_WARNINGS",
    IgnoreWithWarnings = "IGNORE_WITH_WARNINGS",
    Fail = "FAIL"
}


// ValidationOptions
/** 
 * Options for how to validate and process properties on a resource.
**/
export class ValidationOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=schemaValidation" })
  schemaValidation?: ValidationOptionsSchemaValidationEnum;

  @SpeakeasyMetadata({ data: "json, name=undeclaredProperties" })
  undeclaredProperties?: ValidationOptionsUndeclaredPropertiesEnum;
}
