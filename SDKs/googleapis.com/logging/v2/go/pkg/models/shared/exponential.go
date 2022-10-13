package shared

type Exponential struct {
	GrowthFactor     *float64 `json:"growthFactor"`
	NumFiniteBuckets *int32   `json:"numFiniteBuckets"`
	Scale            *float64 `json:"scale"`
}
