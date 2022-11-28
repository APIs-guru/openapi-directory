import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SeverityCountSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Minimal = "MINIMAL",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}
/**
 * The number of occurrences created for a specific severity.
**/
export declare class SeverityCount extends SpeakeasyBase {
    count?: string;
    severity?: SeverityCountSeverityEnum;
}
