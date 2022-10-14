package shared

type Distribution struct {
	BucketCounts          []string            `json:"bucketCounts,omitempty"`
	Count                 *string             `json:"count,omitempty"`
	Exemplars             []Exemplar          `json:"exemplars,omitempty"`
	ExplicitBuckets       *ExplicitBuckets    `json:"explicitBuckets,omitempty"`
	ExponentialBuckets    *ExponentialBuckets `json:"exponentialBuckets,omitempty"`
	LinearBuckets         *LinearBuckets      `json:"linearBuckets,omitempty"`
	Maximum               *float64            `json:"maximum,omitempty"`
	Mean                  *float64            `json:"mean,omitempty"`
	Minimum               *float64            `json:"minimum,omitempty"`
	SumOfSquaredDeviation *float64            `json:"sumOfSquaredDeviation,omitempty"`
}
