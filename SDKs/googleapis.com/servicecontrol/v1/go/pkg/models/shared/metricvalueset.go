package shared

type MetricValueSet struct {
	MetricName   *string       `json:"metricName,omitempty"`
	MetricValues []MetricValue `json:"metricValues,omitempty"`
}
