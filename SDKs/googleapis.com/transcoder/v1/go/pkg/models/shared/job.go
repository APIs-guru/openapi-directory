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
	Config                 *JobConfig        `json:"config,omitempty"`
	CreateTime             *string           `json:"createTime,omitempty"`
	EndTime                *string           `json:"endTime,omitempty"`
	Error                  *Status           `json:"error,omitempty"`
	InputURI               *string           `json:"inputUri,omitempty"`
	Labels                 map[string]string `json:"labels,omitempty"`
	Name                   *string           `json:"name,omitempty"`
	OutputURI              *string           `json:"outputUri,omitempty"`
	StartTime              *string           `json:"startTime,omitempty"`
	State                  *JobStateEnum     `json:"state,omitempty"`
	TemplateID             *string           `json:"templateId,omitempty"`
	TTLAfterCompletionDays *int32            `json:"ttlAfterCompletionDays,omitempty"`
}
