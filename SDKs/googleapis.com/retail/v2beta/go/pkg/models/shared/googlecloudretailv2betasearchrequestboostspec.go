package shared

type GoogleCloudRetailV2betaSearchRequestBoostSpec struct {
	ConditionBoostSpecs     []GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec `json:"conditionBoostSpecs,omitempty"`
	SkipBoostSpecValidation *bool                                                             `json:"skipBoostSpecValidation,omitempty"`
}
