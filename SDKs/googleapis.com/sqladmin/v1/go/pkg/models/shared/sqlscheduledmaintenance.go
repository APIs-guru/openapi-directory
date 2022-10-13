package shared

type SQLScheduledMaintenance struct {
	CanDefer             *bool   `json:"canDefer"`
	CanReschedule        *bool   `json:"canReschedule"`
	ScheduleDeadlineTime *string `json:"scheduleDeadlineTime"`
	StartTime            *string `json:"startTime"`
}
