import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LintResultLevelEnum {
    LevelUnspecified = "LEVEL_UNSPECIFIED",
    Condition = "CONDITION"
}

export enum LintResultSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Error = "ERROR",
    Warning = "WARNING",
    Notice = "NOTICE",
    Info = "INFO",
    Deprecated = "DEPRECATED"
}


// LintResult
/** 
 * Structured response of a single validation unit.
**/
export class LintResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debugMessage" })
  debugMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: LintResultLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=locationOffset" })
  locationOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: LintResultSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=validationUnitName" })
  validationUnitName?: string;
}
