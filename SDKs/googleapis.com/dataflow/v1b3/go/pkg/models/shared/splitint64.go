package shared

type SplitInt64 struct {
	HighBits *int32 `json:"highBits,omitempty"`
	LowBits  *int64 `json:"lowBits,omitempty"`
}
