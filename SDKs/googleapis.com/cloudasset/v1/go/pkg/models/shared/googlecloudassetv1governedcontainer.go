package shared

// GoogleCloudAssetV1GovernedContainer
// The organization/folder/project resource governed by organization policies of AnalyzeOrgPolicyGovernedContainersRequest.constraint.
type GoogleCloudAssetV1GovernedContainer struct {
	ConsolidatedPolicy *AnalyzerOrgPolicy  `json:"consolidatedPolicy,omitempty"`
	FullResourceName   *string             `json:"fullResourceName,omitempty"`
	Parent             *string             `json:"parent,omitempty"`
	PolicyBundle       []AnalyzerOrgPolicy `json:"policyBundle,omitempty"`
}
