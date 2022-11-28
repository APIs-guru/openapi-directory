package shared

// MaintenanceScheduleInput
// Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.
type MaintenanceScheduleInput struct {
	CanReschedule *bool `json:"canReschedule,omitempty"`
}

// MaintenanceSchedule
// Upcoming maintenance schedule. If no maintenance is scheduled, fields are not populated.
type MaintenanceSchedule struct {
	CanReschedule        *bool   `json:"canReschedule,omitempty"`
	EndTime              *string `json:"endTime,omitempty"`
	ScheduleDeadlineTime *string `json:"scheduleDeadlineTime,omitempty"`
	StartTime            *string `json:"startTime,omitempty"`
}
