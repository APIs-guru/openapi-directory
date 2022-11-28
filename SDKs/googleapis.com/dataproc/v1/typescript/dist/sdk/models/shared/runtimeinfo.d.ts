import { SpeakeasyBase } from "../../../internal/utils";
import { UsageMetrics } from "./usagemetrics";
/**
 * Runtime information about workload execution.
**/
export declare class RuntimeInfo extends SpeakeasyBase {
    approximateUsage?: UsageMetrics;
    diagnosticOutputUri?: string;
    endpoints?: Map<string, string>;
    outputUri?: string;
}
/**
 * Runtime information about workload execution.
**/
export declare class RuntimeInfoInput extends SpeakeasyBase {
    approximateUsage?: UsageMetrics;
}
