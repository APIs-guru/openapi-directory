package shared

// GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy
// The IAM policies governed by the organization policies of the AnalyzeOrgPolicyGovernedAssetsRequest.constraint.
type GoogleCloudAssetV1AnalyzeOrgPolicyGovernedAssetsResponseGovernedIamPolicy struct {
	AttachedResource *string  `json:"attachedResource,omitempty"`
	Folders          []string `json:"folders,omitempty"`
	Organization     *string  `json:"organization,omitempty"`
	Policy           *Policy  `json:"policy,omitempty"`
	Project          *string  `json:"project,omitempty"`
}
