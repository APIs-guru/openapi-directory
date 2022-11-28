package shared

// TimeRange
// Information about time ranges.
type TimeRange struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}
