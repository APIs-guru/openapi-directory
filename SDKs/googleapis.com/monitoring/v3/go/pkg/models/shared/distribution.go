package shared

type Distribution struct {
	BucketCounts          []string       `json:"bucketCounts,omitempty"`
	BucketOptions         *BucketOptions `json:"bucketOptions,omitempty"`
	Count                 *string        `json:"count,omitempty"`
	Exemplars             []Exemplar     `json:"exemplars,omitempty"`
	Mean                  *float64       `json:"mean,omitempty"`
	Range                 *Range         `json:"range,omitempty"`
	SumOfSquaredDeviation *float64       `json:"sumOfSquaredDeviation,omitempty"`
}
