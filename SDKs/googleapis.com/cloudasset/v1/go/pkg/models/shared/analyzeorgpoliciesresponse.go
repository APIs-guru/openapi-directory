package shared

// AnalyzeOrgPoliciesResponse
// The response message for AssetService.AnalyzeOrgPolicies.
type AnalyzeOrgPoliciesResponse struct {
	Constraint       *AnalyzerOrgPolicyConstraint `json:"constraint,omitempty"`
	NextPageToken    *string                      `json:"nextPageToken,omitempty"`
	OrgPolicyResults []OrgPolicyResult            `json:"orgPolicyResults,omitempty"`
}
