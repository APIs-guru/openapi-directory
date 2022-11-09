import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SeverityCountSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Minimal = "MINIMAL"
,    Low = "LOW"
,    Medium = "MEDIUM"
,    High = "HIGH"
,    Critical = "CRITICAL"
}


// SeverityCount
/** 
 * The number of occurrences created for a specific severity.
**/
export class SeverityCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: SeverityCountSeverityEnum;
}
