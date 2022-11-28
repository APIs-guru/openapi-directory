package shared

// OptimizationActivity
// Creative optimization activity.
type OptimizationActivity struct {
	FloodlightActivityID               *string         `json:"floodlightActivityId,omitempty"`
	FloodlightActivityIDDimensionValue *DimensionValue `json:"floodlightActivityIdDimensionValue,omitempty"`
	Weight                             *int32          `json:"weight,omitempty"`
}
