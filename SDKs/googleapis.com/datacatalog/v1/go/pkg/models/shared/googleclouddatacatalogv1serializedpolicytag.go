package shared

type GoogleCloudDatacatalogV1SerializedPolicyTag struct {
	ChildPolicyTags []GoogleCloudDatacatalogV1SerializedPolicyTag `json:"childPolicyTags,omitempty"`
	Description     *string                                       `json:"description,omitempty"`
	DisplayName     *string                                       `json:"displayName,omitempty"`
	PolicyTag       *string                                       `json:"policyTag,omitempty"`
}
