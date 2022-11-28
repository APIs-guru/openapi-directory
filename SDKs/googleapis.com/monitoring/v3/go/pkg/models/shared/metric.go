package shared

// Metric
// A specific metric, identified by specifying values for all of the labels of a MetricDescriptor.
type Metric struct {
	Labels map[string]string `json:"labels,omitempty"`
	Type   *string           `json:"type,omitempty"`
}
