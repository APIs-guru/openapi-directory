import { SpeakeasyBase } from "../../../internal/utils";
import { LocalizedString } from "./localizedstring";
export declare enum ContextValueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR",
    Fatal = "FATAL"
}
/**
 * A message representing context for a KeyRangeInfo, including a label, value, unit, and severity.
**/
export declare class ContextValue extends SpeakeasyBase {
    label?: LocalizedString;
    severity?: ContextValueSeverityEnum;
    unit?: string;
    value?: number;
}
