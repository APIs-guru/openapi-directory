package shared

type GoogleCloudDatacatalogV1beta1PolicyTag struct {
	ChildPolicyTags []string `json:"childPolicyTags"`
	Description     *string  `json:"description"`
	DisplayName     *string  `json:"displayName"`
	Name            *string  `json:"name"`
	ParentPolicyTag *string  `json:"parentPolicyTag"`
}
