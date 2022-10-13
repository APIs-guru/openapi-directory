package shared

type FloatingPointMean struct {
	Count *SplitInt64 `json:"count"`
	Sum   *float64    `json:"sum"`
}
