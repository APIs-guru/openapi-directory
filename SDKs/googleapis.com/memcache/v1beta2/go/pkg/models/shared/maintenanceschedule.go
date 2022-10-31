package shared

type MaintenanceSchedule struct {
	EndTime              *string `json:"endTime,omitempty"`
	ScheduleDeadlineTime *string `json:"scheduleDeadlineTime,omitempty"`
	StartTime            *string `json:"startTime,omitempty"`
}
