import { SpeakeasyBase } from "../../../internal/utils";
import { CounterUpdate } from "./counterupdate";
import { DynamicSourceSplit } from "./dynamicsourcesplit";
import { Status } from "./status";
import { MetricUpdate } from "./metricupdate";
import { ApproximateProgress } from "./approximateprogress";
import { ApproximateReportedProgress } from "./approximatereportedprogress";
import { SourceFork } from "./sourcefork";
import { SourceOperationResponse } from "./sourceoperationresponse";
import { Position } from "./position";
/**
 * Conveys a worker's progress through the work described by a WorkItem.
**/
export declare class WorkItemStatus extends SpeakeasyBase {
    completed?: boolean;
    counterUpdates?: CounterUpdate[];
    dynamicSourceSplit?: DynamicSourceSplit;
    errors?: Status[];
    metricUpdates?: MetricUpdate[];
    progress?: ApproximateProgress;
    reportIndex?: string;
    reportedProgress?: ApproximateReportedProgress;
    requestedLeaseDuration?: string;
    sourceFork?: SourceFork;
    sourceOperationResponse?: SourceOperationResponse;
    stopPosition?: Position;
    totalThrottlerWaitTimeSeconds?: number;
    workItemId?: string;
}
