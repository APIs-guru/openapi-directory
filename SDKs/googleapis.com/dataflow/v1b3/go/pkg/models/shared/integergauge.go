package shared

type IntegerGauge struct {
	Timestamp *string     `json:"timestamp"`
	Value     *SplitInt64 `json:"value"`
}
