import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SeverityCountSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Minimal = "MINIMAL",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}


// SeverityCount
/** 
 * The number of occurrences created for a specific severity.
**/
export class SeverityCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: SeverityCountSeverityEnum;
}
