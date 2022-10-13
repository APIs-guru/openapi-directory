package shared

type MaintenanceSchedule struct {
	EndTime              *string `json:"endTime"`
	ScheduleDeadlineTime *string `json:"scheduleDeadlineTime"`
	StartTime            *string `json:"startTime"`
}
