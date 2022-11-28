package shared

// TimedCount
// The number of errors in a given time period. All numbers are approximate since the error events are sampled before counting them.
type TimedCount struct {
	Count     *string `json:"count,omitempty"`
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}
