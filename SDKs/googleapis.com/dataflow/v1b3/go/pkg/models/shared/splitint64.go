package shared

type SplitInt64 struct {
	HighBits *int32 `json:"highBits"`
	LowBits  *int64 `json:"lowBits"`
}
