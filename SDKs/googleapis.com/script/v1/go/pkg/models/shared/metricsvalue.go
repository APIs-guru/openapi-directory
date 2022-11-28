package shared

// MetricsValue
// Metrics value that holds number of executions counted.
type MetricsValue struct {
	EndTime   *string `json:"endTime,omitempty"`
	StartTime *string `json:"startTime,omitempty"`
	Value     *string `json:"value,omitempty"`
}
