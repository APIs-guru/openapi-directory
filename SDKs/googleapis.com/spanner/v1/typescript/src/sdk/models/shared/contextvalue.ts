import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocalizedString } from "./localizedstring";

export enum ContextValueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Info = "INFO"
,    Warning = "WARNING"
,    Error = "ERROR"
,    Fatal = "FATAL"
}


// ContextValue
/** 
 * A message representing context for a KeyRangeInfo, including a label, value, unit, and severity.
**/
export class ContextValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: LocalizedString;

  @Metadata({ data: "json, name=severity" })
  severity?: ContextValueSeverityEnum;

  @Metadata({ data: "json, name=unit" })
  unit?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
