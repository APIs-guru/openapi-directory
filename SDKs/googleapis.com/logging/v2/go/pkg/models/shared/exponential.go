package shared

type Exponential struct {
	GrowthFactor     *float64 `json:"growthFactor,omitempty"`
	NumFiniteBuckets *int32   `json:"numFiniteBuckets,omitempty"`
	Scale            *float64 `json:"scale,omitempty"`
}
