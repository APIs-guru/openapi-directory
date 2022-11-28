import { SpeakeasyBase } from "../../../internal/utils";
import { Resource } from "./resource";
export declare enum FixableTotalByDigestSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Minimal = "MINIMAL",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}
/**
 * Per resource and severity counts of fixable and total vulnerabilities.
**/
export declare class FixableTotalByDigest extends SpeakeasyBase {
    fixableCount?: string;
    resource?: Resource;
    severity?: FixableTotalByDigestSeverityEnum;
    totalCount?: string;
}
