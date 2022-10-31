package shared

type LocalPostMetrics struct {
	LocalPostName *string       `json:"localPostName,omitempty"`
	MetricValues  []MetricValue `json:"metricValues,omitempty"`
}
