import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisCompleted } from "./analysiscompleted";
import { Status } from "./status";
export declare enum DiscoveryOccurrenceAnalysisStatusEnum {
    AnalysisStatusUnspecified = "ANALYSIS_STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Scanning = "SCANNING",
    FinishedSuccess = "FINISHED_SUCCESS",
    Complete = "COMPLETE",
    FinishedFailed = "FINISHED_FAILED",
    FinishedUnsupported = "FINISHED_UNSUPPORTED"
}
export declare enum DiscoveryOccurrenceContinuousAnalysisEnum {
    ContinuousAnalysisUnspecified = "CONTINUOUS_ANALYSIS_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
/**
 * Provides information about the analysis status of a discovered resource.
**/
export declare class DiscoveryOccurrence extends SpeakeasyBase {
    analysisCompleted?: AnalysisCompleted;
    analysisError?: Status[];
    analysisStatus?: DiscoveryOccurrenceAnalysisStatusEnum;
    analysisStatusError?: Status;
    archiveTime?: string;
    continuousAnalysis?: DiscoveryOccurrenceContinuousAnalysisEnum;
    cpe?: string;
    lastScanTime?: string;
}
/**
 * Provides information about the analysis status of a discovered resource.
**/
export declare class DiscoveryOccurrenceInput extends SpeakeasyBase {
    analysisCompleted?: AnalysisCompleted;
    analysisError?: Status[];
    analysisStatus?: DiscoveryOccurrenceAnalysisStatusEnum;
    analysisStatusError?: Status;
    continuousAnalysis?: DiscoveryOccurrenceContinuousAnalysisEnum;
    cpe?: string;
    lastScanTime?: string;
}
