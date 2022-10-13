package shared

type JobMetrics struct {
	MetricTime *string        `json:"metricTime"`
	Metrics    []MetricUpdate `json:"metrics"`
}
