import { SpeakeasyBase } from "../../../internal/utils";
import { MetricUpdate } from "./metricupdate";
import { ProgressTimeseries } from "./progresstimeseries";
import { StragglerSummary } from "./stragglersummary";
export declare enum StageSummaryStateEnum {
    ExecutionStateUnknown = "EXECUTION_STATE_UNKNOWN",
    ExecutionStateNotStarted = "EXECUTION_STATE_NOT_STARTED",
    ExecutionStateRunning = "EXECUTION_STATE_RUNNING",
    ExecutionStateSucceeded = "EXECUTION_STATE_SUCCEEDED",
    ExecutionStateFailed = "EXECUTION_STATE_FAILED",
    ExecutionStateCancelled = "EXECUTION_STATE_CANCELLED"
}
/**
 * Information about a particular execution stage of a job.
**/
export declare class StageSummary extends SpeakeasyBase {
    endTime?: string;
    metrics?: MetricUpdate[];
    progress?: ProgressTimeseries;
    stageId?: string;
    startTime?: string;
    state?: StageSummaryStateEnum;
    stragglerSummary?: StragglerSummary;
}
