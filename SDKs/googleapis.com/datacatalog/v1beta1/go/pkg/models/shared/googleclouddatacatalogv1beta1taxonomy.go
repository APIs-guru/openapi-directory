package shared

type GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum string

const (
	GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified    GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum = "POLICY_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum = "FINE_GRAINED_ACCESS_CONTROL"
)

type GoogleCloudDatacatalogV1beta1Taxonomy struct {
	ActivatedPolicyTypes []GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum `json:"activatedPolicyTypes"`
	Description          *string                                                         `json:"description"`
	DisplayName          *string                                                         `json:"displayName"`
	Name                 *string                                                         `json:"name"`
	PolicyTagCount       *int32                                                          `json:"policyTagCount"`
	TaxonomyTimestamps   *GoogleCloudDatacatalogV1beta1SystemTimestamps                  `json:"taxonomyTimestamps"`
}
