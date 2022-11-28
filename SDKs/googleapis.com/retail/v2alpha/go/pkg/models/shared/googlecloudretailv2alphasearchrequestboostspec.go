package shared

// GoogleCloudRetailV2alphaSearchRequestBoostSpec
// Boost specification to boost certain items.
type GoogleCloudRetailV2alphaSearchRequestBoostSpec struct {
	ConditionBoostSpecs     []GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec `json:"conditionBoostSpecs,omitempty"`
	SkipBoostSpecValidation *bool                                                              `json:"skipBoostSpecValidation,omitempty"`
}
