package shared

// CustomViewabilityMetric
// Custom Viewability Metric
type CustomViewabilityMetric struct {
	Configuration *CustomViewabilityMetricConfiguration `json:"configuration,omitempty"`
	ID            *string                               `json:"id,omitempty"`
	Name          *string                               `json:"name,omitempty"`
}
