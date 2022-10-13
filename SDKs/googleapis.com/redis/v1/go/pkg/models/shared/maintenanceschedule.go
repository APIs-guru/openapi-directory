package shared

type MaintenanceSchedule struct {
	CanReschedule        *bool   `json:"canReschedule"`
	EndTime              *string `json:"endTime"`
	ScheduleDeadlineTime *string `json:"scheduleDeadlineTime"`
	StartTime            *string `json:"startTime"`
}
