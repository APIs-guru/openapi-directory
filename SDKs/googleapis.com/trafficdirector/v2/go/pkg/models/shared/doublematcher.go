package shared

// DoubleMatcher
// Specifies the way to match a double value.
type DoubleMatcher struct {
	Exact *float64     `json:"exact,omitempty"`
	Range *DoubleRange `json:"range,omitempty"`
}
