package shared

type CustomViewabilityMetric struct {
	Configuration *CustomViewabilityMetricConfiguration `json:"configuration,omitempty"`
	ID            *string                               `json:"id,omitempty"`
	Name          *string                               `json:"name,omitempty"`
}
