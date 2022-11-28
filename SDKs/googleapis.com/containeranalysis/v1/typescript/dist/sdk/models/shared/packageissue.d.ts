import { SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";
import { GrafeasV1FileLocation } from "./grafeasv1filelocation";
export declare enum PackageIssueEffectiveSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Minimal = "MINIMAL",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}
/**
 * A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).
**/
export declare class PackageIssue extends SpeakeasyBase {
    affectedCpeUri?: string;
    affectedPackage?: string;
    affectedVersion?: Version;
    effectiveSeverity?: PackageIssueEffectiveSeverityEnum;
    fileLocation?: GrafeasV1FileLocation[];
    fixAvailable?: boolean;
    fixedCpeUri?: string;
    fixedPackage?: string;
    fixedVersion?: Version;
    packageType?: string;
}
/**
 * A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).
**/
export declare class PackageIssueInput extends SpeakeasyBase {
    affectedCpeUri?: string;
    affectedPackage?: string;
    affectedVersion?: Version;
    fileLocation?: GrafeasV1FileLocation[];
    fixAvailable?: boolean;
    fixedCpeUri?: string;
    fixedPackage?: string;
    fixedVersion?: Version;
    packageType?: string;
}
