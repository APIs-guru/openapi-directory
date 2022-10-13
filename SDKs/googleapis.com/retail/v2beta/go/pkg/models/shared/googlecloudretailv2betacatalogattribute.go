package shared

type GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum string

const (
	GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnumDynamicFacetableOptionUnspecified GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnumDynamicFacetableEnabled           GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum = "DYNAMIC_FACETABLE_ENABLED"
	GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnumDynamicFacetableDisabled          GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum = "DYNAMIC_FACETABLE_DISABLED"
)

type GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum string

const (
	GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnumExactSearchableOptionUnspecified GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum = "EXACT_SEARCHABLE_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnumExactSearchableEnabled           GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum = "EXACT_SEARCHABLE_ENABLED"
	GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnumExactSearchableDisabled          GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum = "EXACT_SEARCHABLE_DISABLED"
)

type GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum string

const (
	GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnumIndexableOptionUnspecified GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum = "INDEXABLE_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnumIndexableEnabled           GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum = "INDEXABLE_ENABLED"
	GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnumIndexableDisabled          GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum = "INDEXABLE_DISABLED"
)

type GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum string

const (
	GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnumRecommendationsFilteringOptionUnspecified GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnumRecommendationsFilteringDisabled          GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum = "RECOMMENDATIONS_FILTERING_DISABLED"
	GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnumRecommendationsFilteringEnabled           GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum = "RECOMMENDATIONS_FILTERING_ENABLED"
)

type GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum string

const (
	GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnumSearchableOptionUnspecified GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum = "SEARCHABLE_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnumSearchableEnabled           GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum = "SEARCHABLE_ENABLED"
	GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnumSearchableDisabled          GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum = "SEARCHABLE_DISABLED"
)

type GoogleCloudRetailV2betaCatalogAttributeTypeEnum string

const (
	GoogleCloudRetailV2betaCatalogAttributeTypeEnumUnknown   GoogleCloudRetailV2betaCatalogAttributeTypeEnum = "UNKNOWN"
	GoogleCloudRetailV2betaCatalogAttributeTypeEnumTextual   GoogleCloudRetailV2betaCatalogAttributeTypeEnum = "TEXTUAL"
	GoogleCloudRetailV2betaCatalogAttributeTypeEnumNumerical GoogleCloudRetailV2betaCatalogAttributeTypeEnum = "NUMERICAL"
)

type GoogleCloudRetailV2betaCatalogAttribute struct {
	DynamicFacetableOption         *GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum         `json:"dynamicFacetableOption"`
	ExactSearchableOption          *GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum          `json:"exactSearchableOption"`
	InUse                          *bool                                                                      `json:"inUse"`
	IndexableOption                *GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum                `json:"indexableOption"`
	Key                            *string                                                                    `json:"key"`
	RecommendationsFilteringOption *GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum `json:"recommendationsFilteringOption"`
	SearchableOption               *GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum               `json:"searchableOption"`
	Type                           *GoogleCloudRetailV2betaCatalogAttributeTypeEnum                           `json:"type"`
}
