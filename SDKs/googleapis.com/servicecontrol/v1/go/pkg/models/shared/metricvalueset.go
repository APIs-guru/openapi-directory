package shared

type MetricValueSet struct {
	MetricName   *string       `json:"metricName"`
	MetricValues []MetricValue `json:"metricValues"`
}
