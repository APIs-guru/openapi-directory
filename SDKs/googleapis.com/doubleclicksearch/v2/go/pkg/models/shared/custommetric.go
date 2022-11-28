package shared

// CustomMetric
// A message containing the custom metric.
type CustomMetric struct {
	Name  *string  `json:"name,omitempty"`
	Value *float64 `json:"value,omitempty"`
}
