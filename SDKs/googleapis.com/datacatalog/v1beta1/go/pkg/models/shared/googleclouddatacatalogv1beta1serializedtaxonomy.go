package shared

type GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum string

const (
	GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified    GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum = "POLICY_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum = "FINE_GRAINED_ACCESS_CONTROL"
)

type GoogleCloudDatacatalogV1beta1SerializedTaxonomy struct {
	ActivatedPolicyTypes []GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum `json:"activatedPolicyTypes"`
	Description          *string                                                                   `json:"description"`
	DisplayName          *string                                                                   `json:"displayName"`
	PolicyTags           []GoogleCloudDatacatalogV1beta1SerializedPolicyTag                        `json:"policyTags"`
}
