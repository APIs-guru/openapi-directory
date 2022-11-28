import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DiagnosticKindEnum {
    Warning = "WARNING",
    Error = "ERROR"
}


// Diagnostic
/** 
 * Represents a diagnostic message (error or warning)
**/
export class Diagnostic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: DiagnosticKindEnum;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
