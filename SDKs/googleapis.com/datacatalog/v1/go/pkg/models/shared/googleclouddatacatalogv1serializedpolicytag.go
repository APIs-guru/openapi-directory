package shared

type GoogleCloudDatacatalogV1SerializedPolicyTag struct {
	ChildPolicyTags []GoogleCloudDatacatalogV1SerializedPolicyTag `json:"childPolicyTags"`
	Description     *string                                       `json:"description"`
	DisplayName     *string                                       `json:"displayName"`
	PolicyTag       *string                                       `json:"policyTag"`
}
