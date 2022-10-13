package shared

type JobRunStateEnum string

const (
	JobRunStateEnumStateUnspecified JobRunStateEnum = "STATE_UNSPECIFIED"
	JobRunStateEnumInProgress       JobRunStateEnum = "IN_PROGRESS"
	JobRunStateEnumSucceeded        JobRunStateEnum = "SUCCEEDED"
	JobRunStateEnumFailed           JobRunStateEnum = "FAILED"
)

type JobRun struct {
	CreateTime   *string          `json:"createTime"`
	DeployJobRun *DeployJobRun    `json:"deployJobRun"`
	EndTime      *string          `json:"endTime"`
	Etag         *string          `json:"etag"`
	JobID        *string          `json:"jobId"`
	Name         *string          `json:"name"`
	PhaseID      *string          `json:"phaseId"`
	StartTime    *string          `json:"startTime"`
	State        *JobRunStateEnum `json:"state"`
	UID          *string          `json:"uid"`
	VerifyJobRun *VerifyJobRun    `json:"verifyJobRun"`
}
