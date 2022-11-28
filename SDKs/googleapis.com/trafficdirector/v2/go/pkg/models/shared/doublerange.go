package shared

// DoubleRange
// Specifies the double start and end of the range using half-open interval semantics [start, end).
type DoubleRange struct {
	End   *float64 `json:"end,omitempty"`
	Start *float64 `json:"start,omitempty"`
}
