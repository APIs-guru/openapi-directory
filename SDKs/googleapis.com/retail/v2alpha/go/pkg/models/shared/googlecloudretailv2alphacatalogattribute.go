package shared

type GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum string

const (
	GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnumDynamicFacetableOptionUnspecified GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnumDynamicFacetableEnabled           GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum = "DYNAMIC_FACETABLE_ENABLED"
	GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnumDynamicFacetableDisabled          GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum = "DYNAMIC_FACETABLE_DISABLED"
)

type GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum string

const (
	GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnumExactSearchableOptionUnspecified GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum = "EXACT_SEARCHABLE_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnumExactSearchableEnabled           GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum = "EXACT_SEARCHABLE_ENABLED"
	GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnumExactSearchableDisabled          GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum = "EXACT_SEARCHABLE_DISABLED"
)

type GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum string

const (
	GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnumIndexableOptionUnspecified GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum = "INDEXABLE_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnumIndexableEnabled           GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum = "INDEXABLE_ENABLED"
	GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnumIndexableDisabled          GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum = "INDEXABLE_DISABLED"
)

type GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum string

const (
	GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnumRecommendationsFilteringOptionUnspecified GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnumRecommendationsFilteringDisabled          GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum = "RECOMMENDATIONS_FILTERING_DISABLED"
	GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnumRecommendationsFilteringEnabled           GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum = "RECOMMENDATIONS_FILTERING_ENABLED"
)

type GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum string

const (
	GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnumSearchableOptionUnspecified GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum = "SEARCHABLE_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnumSearchableEnabled           GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum = "SEARCHABLE_ENABLED"
	GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnumSearchableDisabled          GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum = "SEARCHABLE_DISABLED"
)

type GoogleCloudRetailV2alphaCatalogAttributeTypeEnum string

const (
	GoogleCloudRetailV2alphaCatalogAttributeTypeEnumUnknown   GoogleCloudRetailV2alphaCatalogAttributeTypeEnum = "UNKNOWN"
	GoogleCloudRetailV2alphaCatalogAttributeTypeEnumTextual   GoogleCloudRetailV2alphaCatalogAttributeTypeEnum = "TEXTUAL"
	GoogleCloudRetailV2alphaCatalogAttributeTypeEnumNumerical GoogleCloudRetailV2alphaCatalogAttributeTypeEnum = "NUMERICAL"
)

type GoogleCloudRetailV2alphaCatalogAttribute struct {
	DynamicFacetableOption         *GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum         `json:"dynamicFacetableOption,omitempty"`
	ExactSearchableOption          *GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum          `json:"exactSearchableOption,omitempty"`
	InUse                          *bool                                                                       `json:"inUse,omitempty"`
	IndexableOption                *GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum                `json:"indexableOption,omitempty"`
	Key                            *string                                                                     `json:"key,omitempty"`
	RecommendationsFilteringOption *GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum `json:"recommendationsFilteringOption,omitempty"`
	SearchableOption               *GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum               `json:"searchableOption,omitempty"`
	Type                           *GoogleCloudRetailV2alphaCatalogAttributeTypeEnum                           `json:"type,omitempty"`
}
