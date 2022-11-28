package shared

// GoogleCloudRetailV2SearchRequestBoostSpec
// Boost specification to boost certain items.
type GoogleCloudRetailV2SearchRequestBoostSpec struct {
	ConditionBoostSpecs     []GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec `json:"conditionBoostSpecs,omitempty"`
	SkipBoostSpecValidation *bool                                                         `json:"skipBoostSpecValidation,omitempty"`
}
