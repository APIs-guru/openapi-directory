package shared

// TimePeriod
// A message that represents a time period.
type TimePeriod struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}
