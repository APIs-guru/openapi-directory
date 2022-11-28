package shared

// InsightsValue
// Represents an insights value.
type InsightsValue struct {
	Threshold *string `json:"threshold,omitempty"`
	Value     *string `json:"value,omitempty"`
}
