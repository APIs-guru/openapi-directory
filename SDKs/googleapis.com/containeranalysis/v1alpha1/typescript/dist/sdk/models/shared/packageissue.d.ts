import { SpeakeasyBase } from "../../../internal/utils";
import { VulnerabilityLocation } from "./vulnerabilitylocation";
export declare enum PackageIssueEffectiveSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Minimal = "MINIMAL",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}
/**
 * This message wraps a location affected by a vulnerability and its associated fix (if one is available).
**/
export declare class PackageIssueInput extends SpeakeasyBase {
    affectedLocation?: VulnerabilityLocation;
    fixedLocation?: VulnerabilityLocation;
    packageType?: string;
    severityName?: string;
}
/**
 * This message wraps a location affected by a vulnerability and its associated fix (if one is available).
**/
export declare class PackageIssue extends SpeakeasyBase {
    affectedLocation?: VulnerabilityLocation;
    effectiveSeverity?: PackageIssueEffectiveSeverityEnum;
    fixedLocation?: VulnerabilityLocation;
    packageType?: string;
    severityName?: string;
}
