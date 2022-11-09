import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LintResultLevelEnum {
    LevelUnspecified = "LEVEL_UNSPECIFIED"
,    Condition = "CONDITION"
}

export enum LintResultSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Error = "ERROR"
,    Warning = "WARNING"
,    Notice = "NOTICE"
,    Info = "INFO"
,    Deprecated = "DEPRECATED"
}


// LintResult
/** 
 * Structured response of a single validation unit.
**/
export class LintResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=debugMessage" })
  debugMessage?: string;

  @Metadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @Metadata({ data: "json, name=level" })
  level?: LintResultLevelEnum;

  @Metadata({ data: "json, name=locationOffset" })
  locationOffset?: number;

  @Metadata({ data: "json, name=severity" })
  severity?: LintResultSeverityEnum;

  @Metadata({ data: "json, name=validationUnitName" })
  validationUnitName?: string;
}
