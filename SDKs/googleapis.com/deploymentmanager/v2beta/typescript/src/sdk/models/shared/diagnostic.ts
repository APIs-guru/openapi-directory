import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DiagnosticLevelEnum {
    Unknown = "UNKNOWN",
    Information = "INFORMATION",
    Warning = "WARNING",
    Error = "ERROR"
}


export class Diagnostic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: DiagnosticLevelEnum;
}
