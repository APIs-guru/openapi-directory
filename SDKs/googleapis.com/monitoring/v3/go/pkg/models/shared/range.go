package shared

// Range
// The range of the population values.
type Range struct {
	Max *float64 `json:"max,omitempty"`
	Min *float64 `json:"min,omitempty"`
}
