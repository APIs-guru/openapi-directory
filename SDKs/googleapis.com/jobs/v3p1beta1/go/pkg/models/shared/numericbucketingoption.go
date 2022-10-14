package shared

type NumericBucketingOption struct {
	BucketBounds   []float64 `json:"bucketBounds,omitempty"`
	RequiresMinMax *bool     `json:"requiresMinMax,omitempty"`
}
