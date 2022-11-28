package shared

// Distribution
// Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information: * the arithmetic mean of the samples * the minimum and maximum of the samples * the sum-squared-deviation of the samples, used to compute variance * a histogram of the values of the sample points
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
