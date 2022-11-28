import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRetailV2alphaCatalogAttributeTypeEnum {
    Unknown = "UNKNOWN",
    Textual = "TEXTUAL",
    Numerical = "NUMERICAL"
}
export declare enum GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum {
    DynamicFacetableOptionUnspecified = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
    DynamicFacetableEnabled = "DYNAMIC_FACETABLE_ENABLED",
    DynamicFacetableDisabled = "DYNAMIC_FACETABLE_DISABLED"
}
export declare enum GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum {
    ExactSearchableOptionUnspecified = "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
    ExactSearchableEnabled = "EXACT_SEARCHABLE_ENABLED",
    ExactSearchableDisabled = "EXACT_SEARCHABLE_DISABLED"
}
export declare enum GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum {
    IndexableOptionUnspecified = "INDEXABLE_OPTION_UNSPECIFIED",
    IndexableEnabled = "INDEXABLE_ENABLED",
    IndexableDisabled = "INDEXABLE_DISABLED"
}
export declare enum GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum {
    RecommendationsFilteringOptionUnspecified = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
    RecommendationsFilteringDisabled = "RECOMMENDATIONS_FILTERING_DISABLED",
    RecommendationsFilteringEnabled = "RECOMMENDATIONS_FILTERING_ENABLED"
}
export declare enum GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum {
    RetrievableOptionUnspecified = "RETRIEVABLE_OPTION_UNSPECIFIED",
    RetrievableEnabled = "RETRIEVABLE_ENABLED",
    RetrievableDisabled = "RETRIEVABLE_DISABLED"
}
export declare enum GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum {
    SearchableOptionUnspecified = "SEARCHABLE_OPTION_UNSPECIFIED",
    SearchableEnabled = "SEARCHABLE_ENABLED",
    SearchableDisabled = "SEARCHABLE_DISABLED"
}
/**
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
export declare class GoogleCloudRetailV2alphaCatalogAttribute extends SpeakeasyBase {
    dynamicFacetableOption?: GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum;
    exactSearchableOption?: GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum;
    inUse?: boolean;
    indexableOption?: GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum;
    key?: string;
    recommendationsFilteringOption?: GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum;
    retrievableOption?: GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum;
    searchableOption?: GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum;
    type?: GoogleCloudRetailV2alphaCatalogAttributeTypeEnum;
}
/**
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
export declare class GoogleCloudRetailV2alphaCatalogAttributeInput extends SpeakeasyBase {
    dynamicFacetableOption?: GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum;
    exactSearchableOption?: GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum;
    indexableOption?: GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum;
    key?: string;
    recommendationsFilteringOption?: GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum;
    retrievableOption?: GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum;
    searchableOption?: GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum;
}
