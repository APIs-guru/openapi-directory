package shared

type LocalPostMetrics struct {
	LocalPostName *string       `json:"localPostName"`
	MetricValues  []MetricValue `json:"metricValues"`
}
