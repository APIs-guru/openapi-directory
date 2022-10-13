package shared

type NumericBucketingResult struct {
	Counts   []BucketizedCount `json:"counts"`
	MaxValue *float64          `json:"maxValue"`
	MinValue *float64          `json:"minValue"`
}
