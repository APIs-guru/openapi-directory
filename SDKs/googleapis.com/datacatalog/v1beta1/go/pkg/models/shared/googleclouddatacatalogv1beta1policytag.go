package shared

// GoogleCloudDatacatalogV1beta1PolicyTag
// Denotes one policy tag in a taxonomy (e.g. ssn). Policy Tags can be defined in a hierarchy. For example, consider the following hierarchy: Geolocation -> (LatLong, City, ZipCode). PolicyTag "Geolocation" contains three child policy tags: "LatLong", "City", and "ZipCode".
type GoogleCloudDatacatalogV1beta1PolicyTag struct {
	ChildPolicyTags []string `json:"childPolicyTags,omitempty"`
	Description     *string  `json:"description,omitempty"`
	DisplayName     *string  `json:"displayName,omitempty"`
	Name            *string  `json:"name,omitempty"`
	ParentPolicyTag *string  `json:"parentPolicyTag,omitempty"`
}

// GoogleCloudDatacatalogV1beta1PolicyTagInput
// Denotes one policy tag in a taxonomy (e.g. ssn). Policy Tags can be defined in a hierarchy. For example, consider the following hierarchy: Geolocation -> (LatLong, City, ZipCode). PolicyTag "Geolocation" contains three child policy tags: "LatLong", "City", and "ZipCode".
type GoogleCloudDatacatalogV1beta1PolicyTagInput struct {
	Description     *string `json:"description,omitempty"`
	DisplayName     *string `json:"displayName,omitempty"`
	ParentPolicyTag *string `json:"parentPolicyTag,omitempty"`
}
