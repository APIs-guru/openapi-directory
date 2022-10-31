package shared

type DistributionUpdate struct {
	Count        *SplitInt64 `json:"count,omitempty"`
	Histogram    *Histogram  `json:"histogram,omitempty"`
	Max          *SplitInt64 `json:"max,omitempty"`
	Min          *SplitInt64 `json:"min,omitempty"`
	Sum          *SplitInt64 `json:"sum,omitempty"`
	SumOfSquares *float64    `json:"sumOfSquares,omitempty"`
}
