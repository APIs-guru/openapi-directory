package shared

// AttemptStatus
// The status of a task attempt.
type AttemptStatus struct {
	DispatchTime   *string `json:"dispatchTime,omitempty"`
	ResponseStatus *Status `json:"responseStatus,omitempty"`
	ResponseTime   *string `json:"responseTime,omitempty"`
	ScheduleTime   *string `json:"scheduleTime,omitempty"`
}
