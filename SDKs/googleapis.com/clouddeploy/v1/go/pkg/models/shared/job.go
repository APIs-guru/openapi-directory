package shared

type JobStateEnum string

const (
	JobStateEnumStateUnspecified JobStateEnum = "STATE_UNSPECIFIED"
	JobStateEnumPending          JobStateEnum = "PENDING"
	JobStateEnumDisabled         JobStateEnum = "DISABLED"
	JobStateEnumInProgress       JobStateEnum = "IN_PROGRESS"
	JobStateEnumSucceeded        JobStateEnum = "SUCCEEDED"
	JobStateEnumFailed           JobStateEnum = "FAILED"
	JobStateEnumAborted          JobStateEnum = "ABORTED"
)

type Job struct {
	DeployJob map[string]interface{} `json:"deployJob"`
	ID        *string                `json:"id"`
	JobRun    *string                `json:"jobRun"`
	State     *JobStateEnum          `json:"state"`
	VerifyJob map[string]interface{} `json:"verifyJob"`
}
