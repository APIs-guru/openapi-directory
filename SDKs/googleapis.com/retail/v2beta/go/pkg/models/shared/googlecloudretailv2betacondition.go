package shared

type GoogleCloudRetailV2betaCondition struct {
	ActiveTimeRange []GoogleCloudRetailV2betaConditionTimeRange `json:"activeTimeRange"`
	QueryTerms      []GoogleCloudRetailV2betaConditionQueryTerm `json:"queryTerms"`
}
