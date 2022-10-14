package shared

type GoogleCloudRetailV2alphaSearchRequestBoostSpec struct {
	ConditionBoostSpecs     []GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec `json:"conditionBoostSpecs,omitempty"`
	SkipBoostSpecValidation *bool                                                              `json:"skipBoostSpecValidation,omitempty"`
}
