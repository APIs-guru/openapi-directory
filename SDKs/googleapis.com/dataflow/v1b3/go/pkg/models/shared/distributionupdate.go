package shared

type DistributionUpdate struct {
	Count        *SplitInt64 `json:"count"`
	Histogram    *Histogram  `json:"histogram"`
	Max          *SplitInt64 `json:"max"`
	Min          *SplitInt64 `json:"min"`
	Sum          *SplitInt64 `json:"sum"`
	SumOfSquares *float64    `json:"sumOfSquares"`
}
