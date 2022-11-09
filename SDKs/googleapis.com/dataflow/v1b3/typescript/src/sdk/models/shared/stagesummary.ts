import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricUpdate } from "./metricupdate";
import { ProgressTimeseries } from "./progresstimeseries";
import { StragglerSummary } from "./stragglersummary";

export enum StageSummaryStateEnum {
    ExecutionStateUnknown = "EXECUTION_STATE_UNKNOWN"
,    ExecutionStateNotStarted = "EXECUTION_STATE_NOT_STARTED"
,    ExecutionStateRunning = "EXECUTION_STATE_RUNNING"
,    ExecutionStateSucceeded = "EXECUTION_STATE_SUCCEEDED"
,    ExecutionStateFailed = "EXECUTION_STATE_FAILED"
,    ExecutionStateCancelled = "EXECUTION_STATE_CANCELLED"
}


// StageSummary
/** 
 * Information about a particular execution stage of a job.
**/
export class StageSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=metrics", elemType: shared.MetricUpdate })
  metrics?: MetricUpdate[];

  @Metadata({ data: "json, name=progress" })
  progress?: ProgressTimeseries;

  @Metadata({ data: "json, name=stageId" })
  stageId?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: StageSummaryStateEnum;

  @Metadata({ data: "json, name=stragglerSummary" })
  stragglerSummary?: StragglerSummary;
}
