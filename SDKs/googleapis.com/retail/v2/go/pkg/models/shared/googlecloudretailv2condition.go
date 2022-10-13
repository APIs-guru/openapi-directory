package shared

type GoogleCloudRetailV2Condition struct {
	ActiveTimeRange []GoogleCloudRetailV2ConditionTimeRange `json:"activeTimeRange"`
	QueryTerms      []GoogleCloudRetailV2ConditionQueryTerm `json:"queryTerms"`
}
