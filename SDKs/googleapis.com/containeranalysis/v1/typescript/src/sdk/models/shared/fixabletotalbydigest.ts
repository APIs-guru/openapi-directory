import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FixableTotalByDigestSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Minimal = "MINIMAL"
,    Low = "LOW"
,    Medium = "MEDIUM"
,    High = "HIGH"
,    Critical = "CRITICAL"
}


// FixableTotalByDigest
/** 
 * Per resource and severity counts of fixable and total vulnerabilities.
**/
export class FixableTotalByDigest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fixableCount" })
  fixableCount?: string;

  @Metadata({ data: "json, name=resourceUri" })
  resourceUri?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: FixableTotalByDigestSeverityEnum;

  @Metadata({ data: "json, name=totalCount" })
  totalCount?: string;
}
