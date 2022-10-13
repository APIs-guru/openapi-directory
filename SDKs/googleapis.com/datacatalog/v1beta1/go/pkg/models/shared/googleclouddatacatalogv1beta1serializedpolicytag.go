package shared

type GoogleCloudDatacatalogV1beta1SerializedPolicyTag struct {
	ChildPolicyTags []GoogleCloudDatacatalogV1beta1SerializedPolicyTag `json:"childPolicyTags"`
	Description     *string                                            `json:"description"`
	DisplayName     *string                                            `json:"displayName"`
	PolicyTag       *string                                            `json:"policyTag"`
}
