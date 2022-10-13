package shared

type MetricRule struct {
	MetricCosts map[string]string `json:"metricCosts"`
	Selector    *string           `json:"selector"`
}
