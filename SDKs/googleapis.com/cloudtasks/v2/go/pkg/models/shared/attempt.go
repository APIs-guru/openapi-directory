package shared

// Attempt
// The status of a task attempt.
type Attempt struct {
	DispatchTime   *string `json:"dispatchTime,omitempty"`
	ResponseStatus *Status `json:"responseStatus,omitempty"`
	ResponseTime   *string `json:"responseTime,omitempty"`
	ScheduleTime   *string `json:"scheduleTime,omitempty"`
}
