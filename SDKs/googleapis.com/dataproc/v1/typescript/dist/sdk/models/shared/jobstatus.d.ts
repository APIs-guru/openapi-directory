import { SpeakeasyBase } from "../../../internal/utils";
export declare enum JobStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    SetupDone = "SETUP_DONE",
    Running = "RUNNING",
    CancelPending = "CANCEL_PENDING",
    CancelStarted = "CANCEL_STARTED",
    Cancelled = "CANCELLED",
    Done = "DONE",
    Error = "ERROR",
    AttemptFailure = "ATTEMPT_FAILURE"
}
export declare enum JobStatusSubstateEnum {
    Unspecified = "UNSPECIFIED",
    Submitted = "SUBMITTED",
    Queued = "QUEUED",
    StaleStatus = "STALE_STATUS"
}
/**
 * Dataproc job status.
**/
export declare class JobStatus extends SpeakeasyBase {
    details?: string;
    state?: JobStatusStateEnum;
    stateStartTime?: string;
    substate?: JobStatusSubstateEnum;
}
