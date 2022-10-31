package shared

type TimedCount struct {
	Count     *string `json:"count,omitempty"`
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
}
