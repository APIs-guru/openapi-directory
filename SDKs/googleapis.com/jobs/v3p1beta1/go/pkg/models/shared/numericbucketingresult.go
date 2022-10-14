package shared

type NumericBucketingResult struct {
	Counts   []BucketizedCount `json:"counts,omitempty"`
	MaxValue *float64          `json:"maxValue,omitempty"`
	MinValue *float64          `json:"minValue,omitempty"`
}
