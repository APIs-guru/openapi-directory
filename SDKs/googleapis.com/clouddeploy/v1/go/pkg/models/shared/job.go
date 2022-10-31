package shared




type JobStateEnum string

const (
    JobStateEnumStateUnspecified JobStateEnum = "STATE_UNSPECIFIED"
JobStateEnumPending JobStateEnum = "PENDING"
JobStateEnumDisabled JobStateEnum = "DISABLED"
JobStateEnumInProgress JobStateEnum = "IN_PROGRESS"
JobStateEnumSucceeded JobStateEnum = "SUCCEEDED"
JobStateEnumFailed JobStateEnum = "FAILED"
JobStateEnumAborted JobStateEnum = "ABORTED"
)


type Job struct {
    DeployJob map[string]interface{} `json:"deployJob,omitempty"`
    ID *string `json:"id,omitempty"`
    JobRun *string `json:"jobRun,omitempty"`
    State *JobStateEnum `json:"state,omitempty"`
    VerifyJob map[string]interface{} `json:"verifyJob,omitempty"`
    
}

