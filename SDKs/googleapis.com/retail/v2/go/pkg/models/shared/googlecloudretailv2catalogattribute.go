package shared

type GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum string

const (
	GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnumDynamicFacetableOptionUnspecified GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnumDynamicFacetableEnabled           GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum = "DYNAMIC_FACETABLE_ENABLED"
	GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnumDynamicFacetableDisabled          GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum = "DYNAMIC_FACETABLE_DISABLED"
)

type GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum string

const (
	GoogleCloudRetailV2CatalogAttributeIndexableOptionEnumIndexableOptionUnspecified GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum = "INDEXABLE_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2CatalogAttributeIndexableOptionEnumIndexableEnabled           GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum = "INDEXABLE_ENABLED"
	GoogleCloudRetailV2CatalogAttributeIndexableOptionEnumIndexableDisabled          GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum = "INDEXABLE_DISABLED"
)

type GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum string

const (
	GoogleCloudRetailV2CatalogAttributeSearchableOptionEnumSearchableOptionUnspecified GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum = "SEARCHABLE_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2CatalogAttributeSearchableOptionEnumSearchableEnabled           GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum = "SEARCHABLE_ENABLED"
	GoogleCloudRetailV2CatalogAttributeSearchableOptionEnumSearchableDisabled          GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum = "SEARCHABLE_DISABLED"
)

type GoogleCloudRetailV2CatalogAttributeTypeEnum string

const (
	GoogleCloudRetailV2CatalogAttributeTypeEnumUnknown   GoogleCloudRetailV2CatalogAttributeTypeEnum = "UNKNOWN"
	GoogleCloudRetailV2CatalogAttributeTypeEnumTextual   GoogleCloudRetailV2CatalogAttributeTypeEnum = "TEXTUAL"
	GoogleCloudRetailV2CatalogAttributeTypeEnumNumerical GoogleCloudRetailV2CatalogAttributeTypeEnum = "NUMERICAL"
)

type GoogleCloudRetailV2CatalogAttribute struct {
	DynamicFacetableOption *GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum `json:"dynamicFacetableOption"`
	InUse                  *bool                                                          `json:"inUse"`
	IndexableOption        *GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum        `json:"indexableOption"`
	Key                    *string                                                        `json:"key"`
	SearchableOption       *GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum       `json:"searchableOption"`
	Type                   *GoogleCloudRetailV2CatalogAttributeTypeEnum                   `json:"type"`
}
