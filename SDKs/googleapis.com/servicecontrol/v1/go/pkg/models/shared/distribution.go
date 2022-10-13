package shared

type Distribution struct {
	BucketCounts          []string            `json:"bucketCounts"`
	Count                 *string             `json:"count"`
	Exemplars             []Exemplar          `json:"exemplars"`
	ExplicitBuckets       *ExplicitBuckets    `json:"explicitBuckets"`
	ExponentialBuckets    *ExponentialBuckets `json:"exponentialBuckets"`
	LinearBuckets         *LinearBuckets      `json:"linearBuckets"`
	Maximum               *float64            `json:"maximum"`
	Mean                  *float64            `json:"mean"`
	Minimum               *float64            `json:"minimum"`
	SumOfSquaredDeviation *float64            `json:"sumOfSquaredDeviation"`
}
