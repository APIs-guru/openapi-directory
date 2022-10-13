package shared

type GoogleCloudRetailV2alphaCondition struct {
	ActiveTimeRange []GoogleCloudRetailV2alphaConditionTimeRange `json:"activeTimeRange"`
	QueryTerms      []GoogleCloudRetailV2alphaConditionQueryTerm `json:"queryTerms"`
}
