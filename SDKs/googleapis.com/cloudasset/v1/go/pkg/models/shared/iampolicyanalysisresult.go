package shared

type IamPolicyAnalysisResult struct {
	AccessControlLists       []GoogleCloudAssetV1AccessControlList `json:"accessControlLists"`
	AttachedResourceFullName *string                               `json:"attachedResourceFullName"`
	FullyExplored            *bool                                 `json:"fullyExplored"`
	IamBinding               *Binding                              `json:"iamBinding"`
	IdentityList             *GoogleCloudAssetV1IdentityList       `json:"identityList"`
}
