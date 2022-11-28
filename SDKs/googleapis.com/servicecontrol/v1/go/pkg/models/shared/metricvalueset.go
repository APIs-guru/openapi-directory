package shared

// MetricValueSet
// Represents a set of metric values in the same metric. Each metric value in the set should have a unique combination of start time, end time, and label values.
type MetricValueSet struct {
	MetricName   *string       `json:"metricName,omitempty"`
	MetricValues []MetricValue `json:"metricValues,omitempty"`
}
