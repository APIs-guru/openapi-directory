package shared



type GoogleCloudDatacatalogV1beta1SerializedPolicyTag struct {
    ChildPolicyTags []GoogleCloudDatacatalogV1beta1SerializedPolicyTag `json:"childPolicyTags,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    PolicyTag *string `json:"policyTag,omitempty"`
    
}

