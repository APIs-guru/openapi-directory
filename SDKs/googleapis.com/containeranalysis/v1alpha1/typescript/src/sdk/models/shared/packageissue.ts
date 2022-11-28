import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VulnerabilityLocation } from "./vulnerabilitylocation";


export enum PackageIssueEffectiveSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Minimal = "MINIMAL",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}


// PackageIssueInput
/** 
 * This message wraps a location affected by a vulnerability and its associated fix (if one is available).
**/
export class PackageIssueInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=affectedLocation" })
  affectedLocation?: VulnerabilityLocation;

  @SpeakeasyMetadata({ data: "json, name=fixedLocation" })
  fixedLocation?: VulnerabilityLocation;

  @SpeakeasyMetadata({ data: "json, name=packageType" })
  packageType?: string;

  @SpeakeasyMetadata({ data: "json, name=severityName" })
  severityName?: string;
}


// PackageIssue
/** 
 * This message wraps a location affected by a vulnerability and its associated fix (if one is available).
**/
export class PackageIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=affectedLocation" })
  affectedLocation?: VulnerabilityLocation;

  @SpeakeasyMetadata({ data: "json, name=effectiveSeverity" })
  effectiveSeverity?: PackageIssueEffectiveSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=fixedLocation" })
  fixedLocation?: VulnerabilityLocation;

  @SpeakeasyMetadata({ data: "json, name=packageType" })
  packageType?: string;

  @SpeakeasyMetadata({ data: "json, name=severityName" })
  severityName?: string;
}
