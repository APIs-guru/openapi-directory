package shared

type IntegerMean struct {
	Count *SplitInt64 `json:"count"`
	Sum   *SplitInt64 `json:"sum"`
}
