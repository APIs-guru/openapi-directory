package shared

type GoogleCloudContactcenterinsightsV1IssueModelLabelStats struct {
	AnalyzedConversationsCount     *string                                                                     `json:"analyzedConversationsCount"`
	IssueStats                     map[string]GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats `json:"issueStats"`
	UnclassifiedConversationsCount *string                                                                     `json:"unclassifiedConversationsCount"`
}
