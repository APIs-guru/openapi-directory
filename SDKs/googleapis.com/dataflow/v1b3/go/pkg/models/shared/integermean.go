package shared

// IntegerMean
// A representation of an integer mean metric contribution.
type IntegerMean struct {
	Count *SplitInt64 `json:"count,omitempty"`
	Sum   *SplitInt64 `json:"sum,omitempty"`
}
