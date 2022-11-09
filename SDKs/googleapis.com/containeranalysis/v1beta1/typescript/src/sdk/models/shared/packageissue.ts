import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VulnerabilityLocation } from "./vulnerabilitylocation";
import { VulnerabilityLocation } from "./vulnerabilitylocation";

export enum PackageIssueEffectiveSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Minimal = "MINIMAL"
,    Low = "LOW"
,    Medium = "MEDIUM"
,    High = "HIGH"
,    Critical = "CRITICAL"
}


// PackageIssue
/** 
 * This message wraps a location affected by a vulnerability and its associated fix (if one is available).
**/
export class PackageIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=affectedLocation" })
  affectedLocation?: VulnerabilityLocation;

  @Metadata({ data: "json, name=effectiveSeverity" })
  effectiveSeverity?: PackageIssueEffectiveSeverityEnum;

  @Metadata({ data: "json, name=fixedLocation" })
  fixedLocation?: VulnerabilityLocation;

  @Metadata({ data: "json, name=packageType" })
  packageType?: string;

  @Metadata({ data: "json, name=severityName" })
  severityName?: string;
}
