package shared

// Metric
// Represents a metric.
type Metric struct {
	Kind *string `json:"kind,omitempty"`
	Name *string `json:"name,omitempty"`
}
