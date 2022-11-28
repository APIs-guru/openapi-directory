import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalizedString } from "./localizedstring";


export enum ContextValueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR",
    Fatal = "FATAL"
}


// ContextValue
/** 
 * A message representing context for a KeyRangeInfo, including a label, value, unit, and severity.
**/
export class ContextValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: LocalizedString;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: ContextValueSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
