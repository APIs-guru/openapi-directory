package shared

type GoogleCloudRetailV2betaCondition struct {
	ActiveTimeRange []GoogleCloudRetailV2betaConditionTimeRange `json:"activeTimeRange,omitempty"`
	QueryTerms      []GoogleCloudRetailV2betaConditionQueryTerm `json:"queryTerms,omitempty"`
}
