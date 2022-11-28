package shared

// GoogleCloudDatacatalogV1SerializedPolicyTag
// A nested protocol buffer that represents a policy tag and all its descendants.
type GoogleCloudDatacatalogV1SerializedPolicyTag struct {
	ChildPolicyTags []GoogleCloudDatacatalogV1SerializedPolicyTag `json:"childPolicyTags,omitempty"`
	Description     *string                                       `json:"description,omitempty"`
	DisplayName     *string                                       `json:"displayName,omitempty"`
	PolicyTag       *string                                       `json:"policyTag,omitempty"`
}
