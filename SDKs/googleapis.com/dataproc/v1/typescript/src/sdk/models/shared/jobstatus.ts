import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum JobStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    SetupDone = "SETUP_DONE"
,    Running = "RUNNING"
,    CancelPending = "CANCEL_PENDING"
,    CancelStarted = "CANCEL_STARTED"
,    Cancelled = "CANCELLED"
,    Done = "DONE"
,    Error = "ERROR"
,    AttemptFailure = "ATTEMPT_FAILURE"
}

export enum JobStatusSubstateEnum {
    Unspecified = "UNSPECIFIED"
,    Submitted = "SUBMITTED"
,    Queued = "QUEUED"
,    StaleStatus = "STALE_STATUS"
}


// JobStatus
/** 
 * Dataproc job status.
**/
export class JobStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=state" })
  state?: JobStatusStateEnum;

  @Metadata({ data: "json, name=stateStartTime" })
  stateStartTime?: string;

  @Metadata({ data: "json, name=substate" })
  substate?: JobStatusSubstateEnum;
}
