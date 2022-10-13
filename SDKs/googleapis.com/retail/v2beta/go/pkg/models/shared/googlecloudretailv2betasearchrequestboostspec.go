package shared

type GoogleCloudRetailV2betaSearchRequestBoostSpec struct {
	ConditionBoostSpecs     []GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec `json:"conditionBoostSpecs"`
	SkipBoostSpecValidation *bool                                                             `json:"skipBoostSpecValidation"`
}
