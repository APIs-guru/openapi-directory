import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ValidationOptionsSchemaValidationEnum {
    Unknown = "UNKNOWN",
    Ignore = "IGNORE",
    IgnoreWithWarnings = "IGNORE_WITH_WARNINGS",
    Fail = "FAIL"
}
export declare enum ValidationOptionsUndeclaredPropertiesEnum {
    Unknown = "UNKNOWN",
    Include = "INCLUDE",
    Ignore = "IGNORE",
    IncludeWithWarnings = "INCLUDE_WITH_WARNINGS",
    IgnoreWithWarnings = "IGNORE_WITH_WARNINGS",
    Fail = "FAIL"
}
/**
 * Options for how to validate and process properties on a resource.
**/
export declare class ValidationOptions extends SpeakeasyBase {
    schemaValidation?: ValidationOptionsSchemaValidationEnum;
    undeclaredProperties?: ValidationOptionsUndeclaredPropertiesEnum;
}
