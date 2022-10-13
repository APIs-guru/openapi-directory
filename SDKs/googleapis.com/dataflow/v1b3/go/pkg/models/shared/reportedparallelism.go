package shared

type ReportedParallelism struct {
	IsInfinite *bool    `json:"isInfinite"`
	Value      *float64 `json:"value"`
}
