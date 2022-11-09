import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum LintResultLevelEnum {
    LevelUnspecified = "LEVEL_UNSPECIFIED",
    Condition = "CONDITION"
}
export declare enum LintResultSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Error = "ERROR",
    Warning = "WARNING",
    Notice = "NOTICE",
    Info = "INFO",
    Deprecated = "DEPRECATED"
}
/**
 * Structured response of a single validation unit.
**/
export declare class LintResult extends SpeakeasyBase {
    debugMessage?: string;
    fieldName?: string;
    level?: LintResultLevelEnum;
    locationOffset?: number;
    severity?: LintResultSeverityEnum;
    validationUnitName?: string;
}
