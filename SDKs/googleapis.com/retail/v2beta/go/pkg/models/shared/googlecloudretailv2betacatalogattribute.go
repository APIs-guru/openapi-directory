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

type GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum string

const (
	GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnumRetrievableOptionUnspecified GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum = "RETRIEVABLE_OPTION_UNSPECIFIED"
	GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnumRetrievableEnabled           GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum = "RETRIEVABLE_ENABLED"
	GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnumRetrievableDisabled          GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum = "RETRIEVABLE_DISABLED"
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

// GoogleCloudRetailV2betaCatalogAttributeInput
// Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
type GoogleCloudRetailV2betaCatalogAttributeInput struct {
	DynamicFacetableOption         *GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum         `json:"dynamicFacetableOption,omitempty"`
	ExactSearchableOption          *GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum          `json:"exactSearchableOption,omitempty"`
	IndexableOption                *GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum                `json:"indexableOption,omitempty"`
	Key                            *string                                                                    `json:"key,omitempty"`
	RecommendationsFilteringOption *GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum `json:"recommendationsFilteringOption,omitempty"`
	RetrievableOption              *GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum              `json:"retrievableOption,omitempty"`
	SearchableOption               *GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum               `json:"searchableOption,omitempty"`
}

// GoogleCloudRetailV2betaCatalogAttribute
// Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
type GoogleCloudRetailV2betaCatalogAttribute struct {
	DynamicFacetableOption         *GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum         `json:"dynamicFacetableOption,omitempty"`
	ExactSearchableOption          *GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum          `json:"exactSearchableOption,omitempty"`
	InUse                          *bool                                                                      `json:"inUse,omitempty"`
	IndexableOption                *GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum                `json:"indexableOption,omitempty"`
	Key                            *string                                                                    `json:"key,omitempty"`
	RecommendationsFilteringOption *GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum `json:"recommendationsFilteringOption,omitempty"`
	RetrievableOption              *GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum              `json:"retrievableOption,omitempty"`
	SearchableOption               *GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum               `json:"searchableOption,omitempty"`
	Type                           *GoogleCloudRetailV2betaCatalogAttributeTypeEnum                           `json:"type,omitempty"`
}
