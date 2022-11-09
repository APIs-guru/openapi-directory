import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DiagnosticKindEnum {
    Warning = "WARNING"
,    Error = "ERROR"
}


// Diagnostic
/** 
 * Represents a diagnostic message (error or warning)
**/
export class Diagnostic extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: DiagnosticKindEnum;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
