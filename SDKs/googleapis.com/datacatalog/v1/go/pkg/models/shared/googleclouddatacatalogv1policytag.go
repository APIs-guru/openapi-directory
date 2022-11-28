package shared

// GoogleCloudDatacatalogV1PolicyTag
// Denotes one policy tag in a taxonomy, for example, SSN. Policy tags can be defined in a hierarchy. For example: ``` + Geolocation + LatLong + City + ZipCode ``` Where the "Geolocation" policy tag contains three children.
type GoogleCloudDatacatalogV1PolicyTag struct {
	ChildPolicyTags []string `json:"childPolicyTags,omitempty"`
	Description     *string  `json:"description,omitempty"`
	DisplayName     *string  `json:"displayName,omitempty"`
	Name            *string  `json:"name,omitempty"`
	ParentPolicyTag *string  `json:"parentPolicyTag,omitempty"`
}

// GoogleCloudDatacatalogV1PolicyTagInput
// Denotes one policy tag in a taxonomy, for example, SSN. Policy tags can be defined in a hierarchy. For example: ``` + Geolocation + LatLong + City + ZipCode ``` Where the "Geolocation" policy tag contains three children.
type GoogleCloudDatacatalogV1PolicyTagInput struct {
	Description     *string `json:"description,omitempty"`
	DisplayName     *string `json:"displayName,omitempty"`
	ParentPolicyTag *string `json:"parentPolicyTag,omitempty"`
}
