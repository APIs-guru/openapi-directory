import { SpeakeasyBase } from "../../../internal/utils";
import { LocalizedString } from "./localizedstring";
export declare enum DiagnosticMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR",
    Fatal = "FATAL"
}
/**
 * A message representing the key visualizer diagnostic messages.
**/
export declare class DiagnosticMessage extends SpeakeasyBase {
    info?: LocalizedString;
    metric?: LocalizedString;
    metricSpecific?: boolean;
    severity?: DiagnosticMessageSeverityEnum;
    shortMessage?: LocalizedString;
}
