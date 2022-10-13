package shared

type GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum string

const (
	GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified    GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum = "POLICY_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum = "FINE_GRAINED_ACCESS_CONTROL"
)

type GoogleCloudDatacatalogV1SerializedTaxonomy struct {
	ActivatedPolicyTypes []GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum `json:"activatedPolicyTypes"`
	Description          *string                                                              `json:"description"`
	DisplayName          *string                                                              `json:"displayName"`
	PolicyTags           []GoogleCloudDatacatalogV1SerializedPolicyTag                        `json:"policyTags"`
}
