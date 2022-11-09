import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocalizedString } from "./localizedstring";
import { LocalizedString } from "./localizedstring";
import { LocalizedString } from "./localizedstring";

export enum DiagnosticMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Info = "INFO"
,    Warning = "WARNING"
,    Error = "ERROR"
,    Fatal = "FATAL"
}


// DiagnosticMessage
/** 
 * A message representing the key visualizer diagnostic messages.
**/
export class DiagnosticMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=info" })
  info?: LocalizedString;

  @Metadata({ data: "json, name=metric" })
  metric?: LocalizedString;

  @Metadata({ data: "json, name=metricSpecific" })
  metricSpecific?: boolean;

  @Metadata({ data: "json, name=severity" })
  severity?: DiagnosticMessageSeverityEnum;

  @Metadata({ data: "json, name=shortMessage" })
  shortMessage?: LocalizedString;
}
