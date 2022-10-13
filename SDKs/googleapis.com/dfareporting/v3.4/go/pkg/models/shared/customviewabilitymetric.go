package shared

type CustomViewabilityMetric struct {
	Configuration *CustomViewabilityMetricConfiguration `json:"configuration"`
	ID            *string                               `json:"id"`
	Name          *string                               `json:"name"`
}
