package shared

// TimeRange
// A range of time. Data will be pulled over the range as a half-open inverval (that is, [start_time, end_time)).
type TimeRange struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}
