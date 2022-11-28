package shared

// MetricStructuredName
// Identifies a metric, by describing the source which generated the metric.
type MetricStructuredName struct {
	Context map[string]string `json:"context,omitempty"`
	Name    *string           `json:"name,omitempty"`
	Origin  *string           `json:"origin,omitempty"`
}
