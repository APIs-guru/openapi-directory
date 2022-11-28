package shared

// GoogleCloudContactcenterinsightsV1IssueModelResult
// Issue Modeling result on a conversation.
type GoogleCloudContactcenterinsightsV1IssueModelResult struct {
	IssueModel *string                                             `json:"issueModel,omitempty"`
	Issues     []GoogleCloudContactcenterinsightsV1IssueAssignment `json:"issues,omitempty"`
}
