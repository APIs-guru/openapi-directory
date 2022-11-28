package shared

// LocalPostMetrics
// All the metrics requested for a Local Post.
type LocalPostMetrics struct {
	LocalPostName *string       `json:"localPostName,omitempty"`
	MetricValues  []MetricValue `json:"metricValues,omitempty"`
}
