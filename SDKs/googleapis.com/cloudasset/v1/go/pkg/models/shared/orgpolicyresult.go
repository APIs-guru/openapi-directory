package shared

// OrgPolicyResult
// The organization policy result to the query.
type OrgPolicyResult struct {
	ConsolidatedPolicy *AnalyzerOrgPolicy  `json:"consolidatedPolicy,omitempty"`
	PolicyBundle       []AnalyzerOrgPolicy `json:"policyBundle,omitempty"`
}
