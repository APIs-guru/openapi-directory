package shared




type GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum string

const (
    GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum = "POLICY_TYPE_UNSPECIFIED"
GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum = "FINE_GRAINED_ACCESS_CONTROL"
)


type GoogleCloudDatacatalogV1Taxonomy struct {
    ActivatedPolicyTypes []GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum `json:"activatedPolicyTypes,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Name *string `json:"name,omitempty"`
    PolicyTagCount *int32 `json:"policyTagCount,omitempty"`
    TaxonomyTimestamps *GoogleCloudDatacatalogV1SystemTimestamps `json:"taxonomyTimestamps,omitempty"`
    
}

