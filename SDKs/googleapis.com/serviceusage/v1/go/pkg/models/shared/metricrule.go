package shared

type MetricRule struct {
	MetricCosts map[string]string `json:"metricCosts,omitempty"`
	Selector    *string           `json:"selector,omitempty"`
}
