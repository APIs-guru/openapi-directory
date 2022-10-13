package shared

type IamPolicyAnalysisResult struct {
	AccessControlLists       []GoogleCloudAssetV1p4beta1AccessControlList `json:"accessControlLists"`
	AttachedResourceFullName *string                                      `json:"attachedResourceFullName"`
	FullyExplored            *bool                                        `json:"fullyExplored"`
	IamBinding               *Binding                                     `json:"iamBinding"`
	IdentityList             *GoogleCloudAssetV1p4beta1IdentityList       `json:"identityList"`
}
