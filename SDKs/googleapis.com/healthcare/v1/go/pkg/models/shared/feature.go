package shared

// Feature
// A feature of an entity mention.
type Feature struct {
	Confidence *float64 `json:"confidence,omitempty"`
	Value      *string  `json:"value,omitempty"`
}
