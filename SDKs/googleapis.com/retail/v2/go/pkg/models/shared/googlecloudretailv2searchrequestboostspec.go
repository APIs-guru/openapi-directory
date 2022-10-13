package shared

type GoogleCloudRetailV2SearchRequestBoostSpec struct {
	ConditionBoostSpecs     []GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec `json:"conditionBoostSpecs"`
	SkipBoostSpecValidation *bool                                                         `json:"skipBoostSpecValidation"`
}
