package shared

// ExponentialBuckets
// Describing buckets with exponentially growing width.
type ExponentialBuckets struct {
	GrowthFactor     *float64 `json:"growthFactor,omitempty"`
	NumFiniteBuckets *int32   `json:"numFiniteBuckets,omitempty"`
	Scale            *float64 `json:"scale,omitempty"`
}
