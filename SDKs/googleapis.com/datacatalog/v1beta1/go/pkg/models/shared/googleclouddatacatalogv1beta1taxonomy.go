package shared

type GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum string

const (
	GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified    GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum = "POLICY_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum = "FINE_GRAINED_ACCESS_CONTROL"
)

// GoogleCloudDatacatalogV1beta1TaxonomyInput
// A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data.
type GoogleCloudDatacatalogV1beta1TaxonomyInput struct {
	ActivatedPolicyTypes []GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum `json:"activatedPolicyTypes,omitempty"`
	Description          *string                                                         `json:"description,omitempty"`
	DisplayName          *string                                                         `json:"displayName,omitempty"`
	TaxonomyTimestamps   *GoogleCloudDatacatalogV1beta1SystemTimestampsInput             `json:"taxonomyTimestamps,omitempty"`
}

// GoogleCloudDatacatalogV1beta1Taxonomy
// A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data.
type GoogleCloudDatacatalogV1beta1Taxonomy struct {
	ActivatedPolicyTypes []GoogleCloudDatacatalogV1beta1TaxonomyActivatedPolicyTypesEnum `json:"activatedPolicyTypes,omitempty"`
	Description          *string                                                         `json:"description,omitempty"`
	DisplayName          *string                                                         `json:"displayName,omitempty"`
	Name                 *string                                                         `json:"name,omitempty"`
	PolicyTagCount       *int32                                                          `json:"policyTagCount,omitempty"`
	TaxonomyTimestamps   *GoogleCloudDatacatalogV1beta1SystemTimestamps                  `json:"taxonomyTimestamps,omitempty"`
}
