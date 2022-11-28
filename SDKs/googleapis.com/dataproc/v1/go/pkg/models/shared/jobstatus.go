package shared

type JobStatusStateEnum string

const (
	JobStatusStateEnumStateUnspecified JobStatusStateEnum = "STATE_UNSPECIFIED"
	JobStatusStateEnumPending          JobStatusStateEnum = "PENDING"
	JobStatusStateEnumSetupDone        JobStatusStateEnum = "SETUP_DONE"
	JobStatusStateEnumRunning          JobStatusStateEnum = "RUNNING"
	JobStatusStateEnumCancelPending    JobStatusStateEnum = "CANCEL_PENDING"
	JobStatusStateEnumCancelStarted    JobStatusStateEnum = "CANCEL_STARTED"
	JobStatusStateEnumCancelled        JobStatusStateEnum = "CANCELLED"
	JobStatusStateEnumDone             JobStatusStateEnum = "DONE"
	JobStatusStateEnumError            JobStatusStateEnum = "ERROR"
	JobStatusStateEnumAttemptFailure   JobStatusStateEnum = "ATTEMPT_FAILURE"
)

type JobStatusSubstateEnum string

const (
	JobStatusSubstateEnumUnspecified JobStatusSubstateEnum = "UNSPECIFIED"
	JobStatusSubstateEnumSubmitted   JobStatusSubstateEnum = "SUBMITTED"
	JobStatusSubstateEnumQueued      JobStatusSubstateEnum = "QUEUED"
	JobStatusSubstateEnumStaleStatus JobStatusSubstateEnum = "STALE_STATUS"
)

// JobStatus
// Dataproc job status.
type JobStatus struct {
	Details        *string                `json:"details,omitempty"`
	State          *JobStatusStateEnum    `json:"state,omitempty"`
	StateStartTime *string                `json:"stateStartTime,omitempty"`
	Substate       *JobStatusSubstateEnum `json:"substate,omitempty"`
}
