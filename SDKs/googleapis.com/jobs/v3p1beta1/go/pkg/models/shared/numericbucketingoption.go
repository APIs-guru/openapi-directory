package shared

// NumericBucketingOption
// Input only. Use this field to specify bucketing option for the histogram search response.
type NumericBucketingOption struct {
	BucketBounds   []float64 `json:"bucketBounds,omitempty"`
	RequiresMinMax *bool     `json:"requiresMinMax,omitempty"`
}
