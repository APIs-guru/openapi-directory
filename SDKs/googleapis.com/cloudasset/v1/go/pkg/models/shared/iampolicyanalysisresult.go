package shared

type IamPolicyAnalysisResult struct {
	AccessControlLists       []GoogleCloudAssetV1AccessControlList `json:"accessControlLists,omitempty"`
	AttachedResourceFullName *string                               `json:"attachedResourceFullName,omitempty"`
	FullyExplored            *bool                                 `json:"fullyExplored,omitempty"`
	IamBinding               *Binding                              `json:"iamBinding,omitempty"`
	IdentityList             *GoogleCloudAssetV1IdentityList       `json:"identityList,omitempty"`
}
