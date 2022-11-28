package shared

type JobStateEnum string

const (
	JobStateEnumStateUnspecified JobStateEnum = "STATE_UNSPECIFIED"
	JobStateEnumEnabled          JobStateEnum = "ENABLED"
	JobStateEnumPaused           JobStateEnum = "PAUSED"
	JobStateEnumDisabled         JobStateEnum = "DISABLED"
	JobStateEnumUpdateFailed     JobStateEnum = "UPDATE_FAILED"
)

// Job
// Configuration for a job. The maximum allowed size for a job is 1MB.
type Job struct {
	AppEngineHTTPTarget *AppEngineHTTPTarget `json:"appEngineHttpTarget,omitempty"`
	AttemptDeadline     *string              `json:"attemptDeadline,omitempty"`
	Description         *string              `json:"description,omitempty"`
	HTTPTarget          *HTTPTarget          `json:"httpTarget,omitempty"`
	LastAttemptTime     *string              `json:"lastAttemptTime,omitempty"`
	LegacyAppEngineCron *bool                `json:"legacyAppEngineCron,omitempty"`
	Name                *string              `json:"name,omitempty"`
	PubsubTarget        *PubsubTarget        `json:"pubsubTarget,omitempty"`
	RetryConfig         *RetryConfig         `json:"retryConfig,omitempty"`
	Schedule            *string              `json:"schedule,omitempty"`
	ScheduleTime        *string              `json:"scheduleTime,omitempty"`
	State               *JobStateEnum        `json:"state,omitempty"`
	Status              *Status              `json:"status,omitempty"`
	TimeZone            *string              `json:"timeZone,omitempty"`
	UserUpdateTime      *string              `json:"userUpdateTime,omitempty"`
}
