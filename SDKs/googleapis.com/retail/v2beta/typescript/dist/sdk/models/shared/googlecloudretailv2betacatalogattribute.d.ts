import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRetailV2betaCatalogAttributeTypeEnum {
    Unknown = "UNKNOWN",
    Textual = "TEXTUAL",
    Numerical = "NUMERICAL"
}
export declare enum GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum {
    DynamicFacetableOptionUnspecified = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
    DynamicFacetableEnabled = "DYNAMIC_FACETABLE_ENABLED",
    DynamicFacetableDisabled = "DYNAMIC_FACETABLE_DISABLED"
}
export declare enum GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum {
    ExactSearchableOptionUnspecified = "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
    ExactSearchableEnabled = "EXACT_SEARCHABLE_ENABLED",
    ExactSearchableDisabled = "EXACT_SEARCHABLE_DISABLED"
}
export declare enum GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum {
    IndexableOptionUnspecified = "INDEXABLE_OPTION_UNSPECIFIED",
    IndexableEnabled = "INDEXABLE_ENABLED",
    IndexableDisabled = "INDEXABLE_DISABLED"
}
export declare enum GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum {
    RecommendationsFilteringOptionUnspecified = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
    RecommendationsFilteringDisabled = "RECOMMENDATIONS_FILTERING_DISABLED",
    RecommendationsFilteringEnabled = "RECOMMENDATIONS_FILTERING_ENABLED"
}
export declare enum GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum {
    RetrievableOptionUnspecified = "RETRIEVABLE_OPTION_UNSPECIFIED",
    RetrievableEnabled = "RETRIEVABLE_ENABLED",
    RetrievableDisabled = "RETRIEVABLE_DISABLED"
}
export declare enum GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum {
    SearchableOptionUnspecified = "SEARCHABLE_OPTION_UNSPECIFIED",
    SearchableEnabled = "SEARCHABLE_ENABLED",
    SearchableDisabled = "SEARCHABLE_DISABLED"
}
/**
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
export declare class GoogleCloudRetailV2betaCatalogAttribute extends SpeakeasyBase {
    dynamicFacetableOption?: GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum;
    exactSearchableOption?: GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum;
    inUse?: boolean;
    indexableOption?: GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum;
    key?: string;
    recommendationsFilteringOption?: GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum;
    retrievableOption?: GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum;
    searchableOption?: GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum;
    type?: GoogleCloudRetailV2betaCatalogAttributeTypeEnum;
}
/**
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
export declare class GoogleCloudRetailV2betaCatalogAttributeInput extends SpeakeasyBase {
    dynamicFacetableOption?: GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum;
    exactSearchableOption?: GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum;
    indexableOption?: GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum;
    key?: string;
    recommendationsFilteringOption?: GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum;
    retrievableOption?: GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum;
    searchableOption?: GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum;
}
