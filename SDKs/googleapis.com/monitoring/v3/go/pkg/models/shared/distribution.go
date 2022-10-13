package shared

type Distribution struct {
	BucketCounts          []string       `json:"bucketCounts"`
	BucketOptions         *BucketOptions `json:"bucketOptions"`
	Count                 *string        `json:"count"`
	Exemplars             []Exemplar     `json:"exemplars"`
	Mean                  *float64       `json:"mean"`
	Range                 *Range         `json:"range"`
	SumOfSquaredDeviation *float64       `json:"sumOfSquaredDeviation"`
}
