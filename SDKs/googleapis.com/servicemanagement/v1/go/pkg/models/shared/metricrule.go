package shared

// MetricRule
// Bind API methods to metrics. Binding a method to a metric causes that metric's configured quota behaviors to apply to the method call.
type MetricRule struct {
	MetricCosts map[string]string `json:"metricCosts,omitempty"`
	Selector    *string           `json:"selector,omitempty"`
}
