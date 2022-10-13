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
	Config                 *JobConfig        `json:"config"`
	CreateTime             *string           `json:"createTime"`
	EndTime                *string           `json:"endTime"`
	Error                  *Status           `json:"error"`
	InputURI               *string           `json:"inputUri"`
	Labels                 map[string]string `json:"labels"`
	Name                   *string           `json:"name"`
	OutputURI              *string           `json:"outputUri"`
	StartTime              *string           `json:"startTime"`
	State                  *JobStateEnum     `json:"state"`
	TemplateID             *string           `json:"templateId"`
	TTLAfterCompletionDays *int32            `json:"ttlAfterCompletionDays"`
}
