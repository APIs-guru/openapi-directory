import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricUpdate } from "./metricupdate";
import { ProgressTimeseries } from "./progresstimeseries";
import { StragglerInfo } from "./stragglerinfo";


export enum WorkItemDetailsStateEnum {
    ExecutionStateUnknown = "EXECUTION_STATE_UNKNOWN",
    ExecutionStateNotStarted = "EXECUTION_STATE_NOT_STARTED",
    ExecutionStateRunning = "EXECUTION_STATE_RUNNING",
    ExecutionStateSucceeded = "EXECUTION_STATE_SUCCEEDED",
    ExecutionStateFailed = "EXECUTION_STATE_FAILED",
    ExecutionStateCancelled = "EXECUTION_STATE_CANCELLED"
}


// WorkItemDetails
/** 
 * Information about an individual work item execution.
**/
export class WorkItemDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attemptId" })
  attemptId?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: MetricUpdate })
  metrics?: MetricUpdate[];

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: ProgressTimeseries;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: WorkItemDetailsStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stragglerInfo" })
  stragglerInfo?: StragglerInfo;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}
