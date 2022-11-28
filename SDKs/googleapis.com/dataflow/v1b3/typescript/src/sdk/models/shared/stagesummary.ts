import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricUpdate } from "./metricupdate";
import { ProgressTimeseries } from "./progresstimeseries";
import { StragglerSummary } from "./stragglersummary";


export enum StageSummaryStateEnum {
    ExecutionStateUnknown = "EXECUTION_STATE_UNKNOWN",
    ExecutionStateNotStarted = "EXECUTION_STATE_NOT_STARTED",
    ExecutionStateRunning = "EXECUTION_STATE_RUNNING",
    ExecutionStateSucceeded = "EXECUTION_STATE_SUCCEEDED",
    ExecutionStateFailed = "EXECUTION_STATE_FAILED",
    ExecutionStateCancelled = "EXECUTION_STATE_CANCELLED"
}


// StageSummary
/** 
 * Information about a particular execution stage of a job.
**/
export class StageSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: MetricUpdate })
  metrics?: MetricUpdate[];

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: ProgressTimeseries;

  @SpeakeasyMetadata({ data: "json, name=stageId" })
  stageId?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: StageSummaryStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stragglerSummary" })
  stragglerSummary?: StragglerSummary;
}
