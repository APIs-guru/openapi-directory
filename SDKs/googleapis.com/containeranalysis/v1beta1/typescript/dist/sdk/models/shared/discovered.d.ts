import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisCompleted } from "./analysiscompleted";
import { Status } from "./status";
export declare enum DiscoveredAnalysisStatusEnum {
    AnalysisStatusUnspecified = "ANALYSIS_STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Scanning = "SCANNING",
    FinishedSuccess = "FINISHED_SUCCESS",
    Complete = "COMPLETE",
    FinishedFailed = "FINISHED_FAILED",
    FinishedUnsupported = "FINISHED_UNSUPPORTED"
}
export declare enum DiscoveredContinuousAnalysisEnum {
    ContinuousAnalysisUnspecified = "CONTINUOUS_ANALYSIS_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * Provides information about the analysis status of a discovered resource.
**/
export declare class Discovered extends SpeakeasyBase {
    analysisCompleted?: AnalysisCompleted;
    analysisError?: Status[];
    analysisStatus?: DiscoveredAnalysisStatusEnum;
    analysisStatusError?: Status;
    continuousAnalysis?: DiscoveredContinuousAnalysisEnum;
    lastAnalysisTime?: string;
}
