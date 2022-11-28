package shared

// Schedule
// Scan schedule configuration.
type Schedule struct {
	IntervalDurationDays *int32  `json:"intervalDurationDays,omitempty"`
	ScheduleTime         *string `json:"scheduleTime,omitempty"`
}
