import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CisBenchmarkSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Minimal = "MINIMAL",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}
/**
 * A compliance check that is a CIS benchmark.
**/
export declare class CisBenchmark extends SpeakeasyBase {
    profileLevel?: number;
    severity?: CisBenchmarkSeverityEnum;
}
