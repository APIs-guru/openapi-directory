package shared




type GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum string

const (
    GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum = "POLICY_TYPE_UNSPECIFIED"
GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum = "FINE_GRAINED_ACCESS_CONTROL"
)


type GoogleCloudDatacatalogV1beta1SerializedTaxonomy struct {
    ActivatedPolicyTypes []GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum `json:"activatedPolicyTypes,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    PolicyTags []GoogleCloudDatacatalogV1beta1SerializedPolicyTag `json:"policyTags,omitempty"`
    
}

