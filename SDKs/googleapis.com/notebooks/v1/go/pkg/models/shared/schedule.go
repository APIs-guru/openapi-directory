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

// Schedule
// The definition of a schedule.
type Schedule struct {
	CreateTime        *string            `json:"createTime,omitempty"`
	CronSchedule      *string            `json:"cronSchedule,omitempty"`
	Description       *string            `json:"description,omitempty"`
	DisplayName       *string            `json:"displayName,omitempty"`
	ExecutionTemplate *ExecutionTemplate `json:"executionTemplate,omitempty"`
	Name              *string            `json:"name,omitempty"`
	RecentExecutions  []Execution        `json:"recentExecutions,omitempty"`
	State             *ScheduleStateEnum `json:"state,omitempty"`
	TimeZone          *string            `json:"timeZone,omitempty"`
	UpdateTime        *string            `json:"updateTime,omitempty"`
}

// ScheduleInput
// The definition of a schedule.
type ScheduleInput struct {
	CronSchedule      *string            `json:"cronSchedule,omitempty"`
	Description       *string            `json:"description,omitempty"`
	ExecutionTemplate *ExecutionTemplate `json:"executionTemplate,omitempty"`
	State             *ScheduleStateEnum `json:"state,omitempty"`
	TimeZone          *string            `json:"timeZone,omitempty"`
}
