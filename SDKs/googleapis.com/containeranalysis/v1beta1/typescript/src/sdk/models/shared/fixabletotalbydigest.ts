import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";


export enum FixableTotalByDigestSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Minimal = "MINIMAL",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}


// FixableTotalByDigest
/** 
 * Per resource and severity counts of fixable and total vulnerabilities.
**/
export class FixableTotalByDigest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fixableCount" })
  fixableCount?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: Resource;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: FixableTotalByDigestSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=totalCount" })
  totalCount?: string;
}
