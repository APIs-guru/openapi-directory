package shared

type GoogleCloudContactcenterinsightsV1IssueModelResult struct {
	IssueModel *string                                             `json:"issueModel,omitempty"`
	Issues     []GoogleCloudContactcenterinsightsV1IssueAssignment `json:"issues,omitempty"`
}
