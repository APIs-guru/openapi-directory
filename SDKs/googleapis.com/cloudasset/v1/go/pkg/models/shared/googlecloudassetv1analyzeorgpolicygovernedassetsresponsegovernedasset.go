package shared

// GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset
// Represents a GCP asset(resource or IAM policy) governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint.
type GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedAsset struct {
	ConsolidatedPolicy *AnalyzerOrgPolicy                                                         `json:"consolidatedPolicy,omitempty"`
	GovernedIamPolicy  *GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy `json:"governedIamPolicy,omitempty"`
	GovernedResource   *GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedResource  `json:"governedResource,omitempty"`
	PolicyBundle       []AnalyzerOrgPolicy                                                        `json:"policyBundle,omitempty"`
}
