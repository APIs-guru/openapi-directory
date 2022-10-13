package shared

type GoogleCloudRetailV2alphaSearchRequestBoostSpec struct {
	ConditionBoostSpecs     []GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec `json:"conditionBoostSpecs"`
	SkipBoostSpecValidation *bool                                                              `json:"skipBoostSpecValidation"`
}
