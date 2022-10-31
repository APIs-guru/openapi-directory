package shared

type CustomMetric struct {
	Name  *string  `json:"name,omitempty"`
	Value *float64 `json:"value,omitempty"`
}
