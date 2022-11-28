import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisCompleted } from "./analysiscompleted";
import { Status } from "./status";
import { Operation } from "./operation";
export declare enum DiscoveredAnalysisStatusEnum {
    AnalysisStatusUnspecified = "ANALYSIS_STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Scanning = "SCANNING",
    Complete = "COMPLETE",
    FinishedSuccess = "FINISHED_SUCCESS",
    FinishedFailed = "FINISHED_FAILED",
    FinishedUnsupported = "FINISHED_UNSUPPORTED"
}
export declare enum DiscoveredContinuousAnalysisEnum {
    ContinuousAnalysisUnspecified = "CONTINUOUS_ANALYSIS_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * Provides information about the scan status of a discovered resource.
**/
export declare class Discovered extends SpeakeasyBase {
    analysisCompleted?: AnalysisCompleted;
    analysisError?: Status[];
    analysisStatus?: DiscoveredAnalysisStatusEnum;
    analysisStatusError?: Status;
    archiveTime?: string;
    continuousAnalysis?: DiscoveredContinuousAnalysisEnum;
    cpe?: string;
    lastScanTime?: string;
    operation?: Operation;
}
