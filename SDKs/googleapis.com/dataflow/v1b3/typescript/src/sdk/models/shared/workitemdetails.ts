import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricUpdate } from "./metricupdate";
import { ProgressTimeseries } from "./progresstimeseries";
import { StragglerInfo } from "./stragglerinfo";

export enum WorkItemDetailsStateEnum {
    ExecutionStateUnknown = "EXECUTION_STATE_UNKNOWN"
,    ExecutionStateNotStarted = "EXECUTION_STATE_NOT_STARTED"
,    ExecutionStateRunning = "EXECUTION_STATE_RUNNING"
,    ExecutionStateSucceeded = "EXECUTION_STATE_SUCCEEDED"
,    ExecutionStateFailed = "EXECUTION_STATE_FAILED"
,    ExecutionStateCancelled = "EXECUTION_STATE_CANCELLED"
}


// WorkItemDetails
/** 
 * Information about an individual work item execution.
**/
export class WorkItemDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=attemptId" })
  attemptId?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=metrics", elemType: shared.MetricUpdate })
  metrics?: MetricUpdate[];

  @Metadata({ data: "json, name=progress" })
  progress?: ProgressTimeseries;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: WorkItemDetailsStateEnum;

  @Metadata({ data: "json, name=stragglerInfo" })
  stragglerInfo?: StragglerInfo;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;
}
