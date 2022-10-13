package shared

type JobStateEnum string

const (
	JobStateEnumProcessingStateUnspecified JobStateEnum = "PROCESSING_STATE_UNSPECIFIED"
	JobStateEnumPending                    JobStateEnum = "PENDING"
	JobStateEnumRunning                    JobStateEnum = "RUNNING"
	JobStateEnumSucceeded                  JobStateEnum = "SUCCEEDED"
	JobStateEnumFailed                     JobStateEnum = "FAILED"
)

type Job struct {
	Config                 *JobConfig      `json:"config"`
	CreateTime             *string         `json:"createTime"`
	EndTime                *string         `json:"endTime"`
	FailureDetails         []FailureDetail `json:"failureDetails"`
	FailureReason          *string         `json:"failureReason"`
	InputURI               *string         `json:"inputUri"`
	Name                   *string         `json:"name"`
	OriginURI              *OriginURI      `json:"originUri"`
	OutputURI              *string         `json:"outputUri"`
	Priority               *int32          `json:"priority"`
	Progress               *Progress       `json:"progress"`
	StartTime              *string         `json:"startTime"`
	State                  *JobStateEnum   `json:"state"`
	TemplateID             *string         `json:"templateId"`
	TTLAfterCompletionDays *int32          `json:"ttlAfterCompletionDays"`
}
