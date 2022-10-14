package shared

type GoogleCloudRetailV2SearchRequestBoostSpec struct {
	ConditionBoostSpecs     []GoogleCloudRetailV2SearchRequestBoostSpecConditionBoostSpec `json:"conditionBoostSpecs,omitempty"`
	SkipBoostSpecValidation *bool                                                         `json:"skipBoostSpecValidation,omitempty"`
}
