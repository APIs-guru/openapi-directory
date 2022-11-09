import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ExecutionStageStateExecutionStageStateEnum {
    JobStateUnknown = "JOB_STATE_UNKNOWN"
,    JobStateStopped = "JOB_STATE_STOPPED"
,    JobStateRunning = "JOB_STATE_RUNNING"
,    JobStateDone = "JOB_STATE_DONE"
,    JobStateFailed = "JOB_STATE_FAILED"
,    JobStateCancelled = "JOB_STATE_CANCELLED"
,    JobStateUpdated = "JOB_STATE_UPDATED"
,    JobStateDraining = "JOB_STATE_DRAINING"
,    JobStateDrained = "JOB_STATE_DRAINED"
,    JobStatePending = "JOB_STATE_PENDING"
,    JobStateCancelling = "JOB_STATE_CANCELLING"
,    JobStateQueued = "JOB_STATE_QUEUED"
,    JobStateResourceCleaningUp = "JOB_STATE_RESOURCE_CLEANING_UP"
}


// ExecutionStageState
/** 
 * A message describing the state of a particular execution stage.
**/
export class ExecutionStageState extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentStateTime" })
  currentStateTime?: string;

  @Metadata({ data: "json, name=executionStageName" })
  executionStageName?: string;

  @Metadata({ data: "json, name=executionStageState" })
  executionStageState?: ExecutionStageStateExecutionStageStateEnum;
}
