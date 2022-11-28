import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalizedString } from "./localizedstring";


export enum DiagnosticMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR",
    Fatal = "FATAL"
}


// DiagnosticMessage
/** 
 * A message representing the key visualizer diagnostic messages.
**/
export class DiagnosticMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: LocalizedString;

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: LocalizedString;

  @SpeakeasyMetadata({ data: "json, name=metricSpecific" })
  metricSpecific?: boolean;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: DiagnosticMessageSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=shortMessage" })
  shortMessage?: LocalizedString;
}
