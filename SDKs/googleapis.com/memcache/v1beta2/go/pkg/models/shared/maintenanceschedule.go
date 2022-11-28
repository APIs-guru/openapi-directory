package shared

// MaintenanceSchedule
// Upcoming maintenance schedule.
type MaintenanceSchedule struct {
	EndTime              *string `json:"endTime,omitempty"`
	ScheduleDeadlineTime *string `json:"scheduleDeadlineTime,omitempty"`
	StartTime            *string `json:"startTime,omitempty"`
}
