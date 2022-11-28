package shared

// Aggregation
// Defines a aggregation that produces a single result.
type Aggregation struct {
	Alias *string `json:"alias,omitempty"`
	Count *Count  `json:"count,omitempty"`
}
