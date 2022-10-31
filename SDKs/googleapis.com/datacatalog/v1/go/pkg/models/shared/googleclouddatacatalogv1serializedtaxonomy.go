package shared

type GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum string

const (
	GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified    GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum = "POLICY_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum = "FINE_GRAINED_ACCESS_CONTROL"
)

type GoogleCloudDatacatalogV1SerializedTaxonomy struct {
	ActivatedPolicyTypes []GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum `json:"activatedPolicyTypes,omitempty"`
	Description          *string                                                              `json:"description,omitempty"`
	DisplayName          *string                                                              `json:"displayName,omitempty"`
	PolicyTags           []GoogleCloudDatacatalogV1SerializedPolicyTag                        `json:"policyTags,omitempty"`
}
