import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DiagnosticLevelEnum {
    Unknown = "UNKNOWN"
,    Information = "INFORMATION"
,    Warning = "WARNING"
,    Error = "ERROR"
}


export class Diagnostic extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=level" })
  level?: DiagnosticLevelEnum;
}
