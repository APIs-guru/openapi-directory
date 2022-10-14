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
	Config                 *JobConfig      `json:"config,omitempty"`
	CreateTime             *string         `json:"createTime,omitempty"`
	EndTime                *string         `json:"endTime,omitempty"`
	FailureDetails         []FailureDetail `json:"failureDetails,omitempty"`
	FailureReason          *string         `json:"failureReason,omitempty"`
	InputURI               *string         `json:"inputUri,omitempty"`
	Name                   *string         `json:"name,omitempty"`
	OriginURI              *OriginURI      `json:"originUri,omitempty"`
	OutputURI              *string         `json:"outputUri,omitempty"`
	Priority               *int32          `json:"priority,omitempty"`
	Progress               *Progress       `json:"progress,omitempty"`
	StartTime              *string         `json:"startTime,omitempty"`
	State                  *JobStateEnum   `json:"state,omitempty"`
	TemplateID             *string         `json:"templateId,omitempty"`
	TTLAfterCompletionDays *int32          `json:"ttlAfterCompletionDays,omitempty"`
}
