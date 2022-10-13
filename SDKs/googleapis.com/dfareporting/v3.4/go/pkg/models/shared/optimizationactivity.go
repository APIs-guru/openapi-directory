package shared

type OptimizationActivity struct {
	FloodlightActivityID               *string         `json:"floodlightActivityId"`
	FloodlightActivityIDDimensionValue *DimensionValue `json:"floodlightActivityIdDimensionValue"`
	Weight                             *int32          `json:"weight"`
}
