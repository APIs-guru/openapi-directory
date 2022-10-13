package shared

type ScheduleStateEnum string

const (
	ScheduleStateEnumStateUnspecified ScheduleStateEnum = "STATE_UNSPECIFIED"
	ScheduleStateEnumEnabled          ScheduleStateEnum = "ENABLED"
	ScheduleStateEnumPaused           ScheduleStateEnum = "PAUSED"
	ScheduleStateEnumDisabled         ScheduleStateEnum = "DISABLED"
	ScheduleStateEnumUpdateFailed     ScheduleStateEnum = "UPDATE_FAILED"
	ScheduleStateEnumInitializing     ScheduleStateEnum = "INITIALIZING"
	ScheduleStateEnumDeleting         ScheduleStateEnum = "DELETING"
)

type Schedule struct {
	CreateTime        *string            `json:"createTime"`
	CronSchedule      *string            `json:"cronSchedule"`
	Description       *string            `json:"description"`
	DisplayName       *string            `json:"displayName"`
	ExecutionTemplate *ExecutionTemplate `json:"executionTemplate"`
	Name              *string            `json:"name"`
	RecentExecutions  []Execution        `json:"recentExecutions"`
	State             *ScheduleStateEnum `json:"state"`
	TimeZone          *string            `json:"timeZone"`
	UpdateTime        *string            `json:"updateTime"`
}
