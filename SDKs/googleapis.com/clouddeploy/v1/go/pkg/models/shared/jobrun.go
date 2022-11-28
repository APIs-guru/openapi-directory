package shared

type JobRunStateEnum string

const (
	JobRunStateEnumStateUnspecified JobRunStateEnum = "STATE_UNSPECIFIED"
	JobRunStateEnumInProgress       JobRunStateEnum = "IN_PROGRESS"
	JobRunStateEnumSucceeded        JobRunStateEnum = "SUCCEEDED"
	JobRunStateEnumFailed           JobRunStateEnum = "FAILED"
)

// JobRun
// A `JobRun` resource in the Google Cloud Deploy API. A `JobRun` contains information of a single `Rollout` job evaluation.
type JobRun struct {
	CreateTime   *string          `json:"createTime,omitempty"`
	DeployJobRun *DeployJobRun    `json:"deployJobRun,omitempty"`
	EndTime      *string          `json:"endTime,omitempty"`
	Etag         *string          `json:"etag,omitempty"`
	JobID        *string          `json:"jobId,omitempty"`
	Name         *string          `json:"name,omitempty"`
	PhaseID      *string          `json:"phaseId,omitempty"`
	StartTime    *string          `json:"startTime,omitempty"`
	State        *JobRunStateEnum `json:"state,omitempty"`
	UID          *string          `json:"uid,omitempty"`
	VerifyJobRun *VerifyJobRun    `json:"verifyJobRun,omitempty"`
}
