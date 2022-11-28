package shared

// TimeWindow
// A time window specified by its `start_time` and `end_time`.
type TimeWindow struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}
