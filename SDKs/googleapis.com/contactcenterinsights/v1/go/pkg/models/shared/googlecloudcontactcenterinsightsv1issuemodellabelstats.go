package shared



type GoogleCloudContactcenterinsightsV1IssueModelLabelStats struct {
    AnalyzedConversationsCount *string `json:"analyzedConversationsCount,omitempty"`
    IssueStats map[string]GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats `json:"issueStats,omitempty"`
    UnclassifiedConversationsCount *string `json:"unclassifiedConversationsCount,omitempty"`
    
}

