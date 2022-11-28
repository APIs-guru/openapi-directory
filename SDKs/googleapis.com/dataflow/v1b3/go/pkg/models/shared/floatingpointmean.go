package shared

// FloatingPointMean
// A representation of a floating point mean metric contribution.
type FloatingPointMean struct {
	Count *SplitInt64 `json:"count,omitempty"`
	Sum   *float64    `json:"sum,omitempty"`
}
