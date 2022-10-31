package shared

type IamPolicyAnalysisResult struct {
	AccessControlLists       []GoogleCloudAssetV1p4beta1AccessControlList `json:"accessControlLists,omitempty"`
	AttachedResourceFullName *string                                      `json:"attachedResourceFullName,omitempty"`
	FullyExplored            *bool                                        `json:"fullyExplored,omitempty"`
	IamBinding               *Binding                                     `json:"iamBinding,omitempty"`
	IdentityList             *GoogleCloudAssetV1p4beta1IdentityList       `json:"identityList,omitempty"`
}
