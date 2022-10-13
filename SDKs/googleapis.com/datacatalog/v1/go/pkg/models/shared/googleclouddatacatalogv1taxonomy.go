package shared

type GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum string

const (
	GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified    GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum = "POLICY_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum = "FINE_GRAINED_ACCESS_CONTROL"
)

type GoogleCloudDatacatalogV1Taxonomy struct {
	ActivatedPolicyTypes []GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum `json:"activatedPolicyTypes"`
	Description          *string                                                    `json:"description"`
	DisplayName          *string                                                    `json:"displayName"`
	Name                 *string                                                    `json:"name"`
	PolicyTagCount       *int32                                                     `json:"policyTagCount"`
	TaxonomyTimestamps   *GoogleCloudDatacatalogV1SystemTimestamps                  `json:"taxonomyTimestamps"`
}
