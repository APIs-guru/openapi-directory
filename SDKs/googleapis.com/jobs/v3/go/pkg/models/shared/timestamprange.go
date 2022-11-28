package shared

// TimestampRange
// Message representing a period of time between two timestamps.
type TimestampRange struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}
