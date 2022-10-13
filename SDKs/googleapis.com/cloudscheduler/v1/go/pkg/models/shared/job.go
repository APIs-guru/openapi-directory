package shared

type JobStateEnum string

const (
	JobStateEnumStateUnspecified JobStateEnum = "STATE_UNSPECIFIED"
	JobStateEnumEnabled          JobStateEnum = "ENABLED"
	JobStateEnumPaused           JobStateEnum = "PAUSED"
	JobStateEnumDisabled         JobStateEnum = "DISABLED"
	JobStateEnumUpdateFailed     JobStateEnum = "UPDATE_FAILED"
)

type Job struct {
	AppEngineHTTPTarget *AppEngineHTTPTarget `json:"appEngineHttpTarget"`
	AttemptDeadline     *string              `json:"attemptDeadline"`
	Description         *string              `json:"description"`
	HTTPTarget          *HTTPTarget          `json:"httpTarget"`
	LastAttemptTime     *string              `json:"lastAttemptTime"`
	Name                *string              `json:"name"`
	PubsubTarget        *PubsubTarget        `json:"pubsubTarget"`
	RetryConfig         *RetryConfig         `json:"retryConfig"`
	Schedule            *string              `json:"schedule"`
	ScheduleTime        *string              `json:"scheduleTime"`
	State               *JobStateEnum        `json:"state"`
	Status              *Status              `json:"status"`
	TimeZone            *string              `json:"timeZone"`
	UserUpdateTime      *string              `json:"userUpdateTime"`
}
