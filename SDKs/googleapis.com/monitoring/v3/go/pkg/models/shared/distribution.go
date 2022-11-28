package shared

// Distribution
// Distribution contains summary statistics for a population of values. It optionally contains a histogram representing the distribution of those values across a set of buckets.The summary statistics are the count, mean, sum of the squared deviation from the mean, the minimum, and the maximum of the set of population of values. The histogram is based on a sequence of buckets and gives a count of values that fall into each bucket. The boundaries of the buckets are given either explicitly or by formulas for buckets of fixed or exponentially increasing widths.Although it is not forbidden, it is generally a bad idea to include non-finite values (infinities or NaNs) in the population of values, as this will render the mean and sum_of_squared_deviation fields meaningless.
type Distribution struct {
	BucketCounts          []string       `json:"bucketCounts,omitempty"`
	BucketOptions         *BucketOptions `json:"bucketOptions,omitempty"`
	Count                 *string        `json:"count,omitempty"`
	Exemplars             []Exemplar     `json:"exemplars,omitempty"`
	Mean                  *float64       `json:"mean,omitempty"`
	Range                 *Range         `json:"range,omitempty"`
	SumOfSquaredDeviation *float64       `json:"sumOfSquaredDeviation,omitempty"`
}
