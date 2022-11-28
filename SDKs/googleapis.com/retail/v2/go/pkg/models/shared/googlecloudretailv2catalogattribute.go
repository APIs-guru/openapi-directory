package shared

type GoogleCloudRetailV2CatalogAttributeTypeEnum string

const (
	GoogleCloudRetailV2CatalogAttributeTypeEnumUnknown   GoogleCloudRetailV2CatalogAttributeTypeEnum = "UNKNOWN"
	GoogleCloudRetailV2CatalogAttributeTypeEnumTextual   GoogleCloudRetailV2CatalogAttributeTypeEnum = "TEXTUAL"
	GoogleCloudRetailV2CatalogAttributeTypeEnumNumerical GoogleCloudRetailV2CatalogAttributeTypeEnum = "NUMERICAL"
)

type GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum string

const (
	GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnumDynamicFacetableOptionUnspecified GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnumDynamicFacetableEnabled           GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum = "DYNAMIC_FACETABLE_ENABLED"
	GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnumDynamicFacetableDisabled          GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum = "DYNAMIC_FACETABLE_DISABLED"
)

type GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum string

const (
	GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnumExactSearchableOptionUnspecified GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum = "EXACT_SEARCHABLE_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnumExactSearchableEnabled           GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum = "EXACT_SEARCHABLE_ENABLED"
	GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnumExactSearchableDisabled          GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum = "EXACT_SEARCHABLE_DISABLED"
)

type GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum string

const (
	GoogleCloudRetailV2CatalogAttributeIndexableOptionEnumIndexableOptionUnspecified GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum = "INDEXABLE_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2CatalogAttributeIndexableOptionEnumIndexableEnabled           GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum = "INDEXABLE_ENABLED"
	GoogleCloudRetailV2CatalogAttributeIndexableOptionEnumIndexableDisabled          GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum = "INDEXABLE_DISABLED"
)

type GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum string

const (
	GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnumRetrievableOptionUnspecified GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum = "RETRIEVABLE_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnumRetrievableEnabled           GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum = "RETRIEVABLE_ENABLED"
	GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnumRetrievableDisabled          GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum = "RETRIEVABLE_DISABLED"
)

type GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum string

const (
	GoogleCloudRetailV2CatalogAttributeSearchableOptionEnumSearchableOptionUnspecified GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum = "SEARCHABLE_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2CatalogAttributeSearchableOptionEnumSearchableEnabled           GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum = "SEARCHABLE_ENABLED"
	GoogleCloudRetailV2CatalogAttributeSearchableOptionEnumSearchableDisabled          GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum = "SEARCHABLE_DISABLED"
)

// GoogleCloudRetailV2CatalogAttribute
// Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
type GoogleCloudRetailV2CatalogAttribute struct {
	DynamicFacetableOption *GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum `json:"dynamicFacetableOption,omitempty"`
	ExactSearchableOption  *GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum  `json:"exactSearchableOption,omitempty"`
	InUse                  *bool                                                          `json:"inUse,omitempty"`
	IndexableOption        *GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum        `json:"indexableOption,omitempty"`
	Key                    *string                                                        `json:"key,omitempty"`
	RetrievableOption      *GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum      `json:"retrievableOption,omitempty"`
	SearchableOption       *GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum       `json:"searchableOption,omitempty"`
	Type                   *GoogleCloudRetailV2CatalogAttributeTypeEnum                   `json:"type,omitempty"`
}

// GoogleCloudRetailV2CatalogAttributeInput
// Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
type GoogleCloudRetailV2CatalogAttributeInput struct {
	DynamicFacetableOption *GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum `json:"dynamicFacetableOption,omitempty"`
	ExactSearchableOption  *GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum  `json:"exactSearchableOption,omitempty"`
	IndexableOption        *GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum        `json:"indexableOption,omitempty"`
	Key                    *string                                                        `json:"key,omitempty"`
	RetrievableOption      *GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum      `json:"retrievableOption,omitempty"`
	SearchableOption       *GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum       `json:"searchableOption,omitempty"`
}
