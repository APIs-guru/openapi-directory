package shared

type NumericBucketingOption struct {
	BucketBounds   []float64 `json:"bucketBounds"`
	RequiresMinMax *bool     `json:"requiresMinMax"`
}
