package shared

// SplitInt64
// A representation of an int64, n, that is immune to precision loss when encoded in JSON.
type SplitInt64 struct {
	HighBits *int32 `json:"highBits,omitempty"`
	LowBits  *int64 `json:"lowBits,omitempty"`
}
