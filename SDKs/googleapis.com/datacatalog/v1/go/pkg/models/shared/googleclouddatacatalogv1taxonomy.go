package shared

type GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum string

const (
	GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnumPolicyTypeUnspecified    GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum = "POLICY_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnumFineGrainedAccessControl GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum = "FINE_GRAINED_ACCESS_CONTROL"
)

// GoogleCloudDatacatalogV1Taxonomy
// A taxonomy is a collection of hierarchical policy tags that classify data along a common axis. For example, a "data sensitivity" taxonomy might contain the following policy tags: ``` + PII + Account number + Age + SSN + Zipcode + Financials + Revenue ``` A "data origin" taxonomy might contain the following policy tags: ``` + User data + Employee data + Partner data + Public data ```
type GoogleCloudDatacatalogV1Taxonomy struct {
	ActivatedPolicyTypes []GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum `json:"activatedPolicyTypes,omitempty"`
	Description          *string                                                    `json:"description,omitempty"`
	DisplayName          *string                                                    `json:"displayName,omitempty"`
	Name                 *string                                                    `json:"name,omitempty"`
	PolicyTagCount       *int32                                                     `json:"policyTagCount,omitempty"`
	TaxonomyTimestamps   *GoogleCloudDatacatalogV1SystemTimestamps                  `json:"taxonomyTimestamps,omitempty"`
}

// GoogleCloudDatacatalogV1TaxonomyInput
// A taxonomy is a collection of hierarchical policy tags that classify data along a common axis. For example, a "data sensitivity" taxonomy might contain the following policy tags: ``` + PII + Account number + Age + SSN + Zipcode + Financials + Revenue ``` A "data origin" taxonomy might contain the following policy tags: ``` + User data + Employee data + Partner data + Public data ```
type GoogleCloudDatacatalogV1TaxonomyInput struct {
	ActivatedPolicyTypes []GoogleCloudDatacatalogV1TaxonomyActivatedPolicyTypesEnum `json:"activatedPolicyTypes,omitempty"`
	Description          *string                                                    `json:"description,omitempty"`
	DisplayName          *string                                                    `json:"displayName,omitempty"`
	TaxonomyTimestamps   *GoogleCloudDatacatalogV1SystemTimestampsInput             `json:"taxonomyTimestamps,omitempty"`
}
