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

type JobStatus struct {
	Details        *string                `json:"details"`
	State          *JobStatusStateEnum    `json:"state"`
	StateStartTime *string                `json:"stateStartTime"`
	Substate       *JobStatusSubstateEnum `json:"substate"`
}
