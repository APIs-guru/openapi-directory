package shared

// GoogleCloudRetailV2betaSearchRequestBoostSpec
// Boost specification to boost certain items.
type GoogleCloudRetailV2betaSearchRequestBoostSpec struct {
	ConditionBoostSpecs     []GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec `json:"conditionBoostSpecs,omitempty"`
	SkipBoostSpecValidation *bool                                                             `json:"skipBoostSpecValidation,omitempty"`
}
