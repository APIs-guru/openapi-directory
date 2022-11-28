import { SpeakeasyBase } from "../../../internal/utils";
import { MetricUpdate } from "./metricupdate";
import { ProgressTimeseries } from "./progresstimeseries";
import { StragglerInfo } from "./stragglerinfo";
export declare enum WorkItemDetailsStateEnum {
    ExecutionStateUnknown = "EXECUTION_STATE_UNKNOWN",
    ExecutionStateNotStarted = "EXECUTION_STATE_NOT_STARTED",
    ExecutionStateRunning = "EXECUTION_STATE_RUNNING",
    ExecutionStateSucceeded = "EXECUTION_STATE_SUCCEEDED",
    ExecutionStateFailed = "EXECUTION_STATE_FAILED",
    ExecutionStateCancelled = "EXECUTION_STATE_CANCELLED"
}
/**
 * Information about an individual work item execution.
**/
export declare class WorkItemDetails extends SpeakeasyBase {
    attemptId?: string;
    endTime?: string;
    metrics?: MetricUpdate[];
    progress?: ProgressTimeseries;
    startTime?: string;
    state?: WorkItemDetailsStateEnum;
    stragglerInfo?: StragglerInfo;
    taskId?: string;
}
