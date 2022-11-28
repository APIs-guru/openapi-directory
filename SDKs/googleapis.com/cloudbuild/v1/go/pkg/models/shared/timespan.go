package shared

// TimeSpan
// Start and end times for a build execution phase.
type TimeSpan struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}
