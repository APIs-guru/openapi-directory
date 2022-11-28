import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum {
    DynamicFacetableOptionUnspecified = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
    DynamicFacetableEnabled = "DYNAMIC_FACETABLE_ENABLED",
    DynamicFacetableDisabled = "DYNAMIC_FACETABLE_DISABLED"
}
export declare enum GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum {
    ExactSearchableOptionUnspecified = "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
    ExactSearchableEnabled = "EXACT_SEARCHABLE_ENABLED",
    ExactSearchableDisabled = "EXACT_SEARCHABLE_DISABLED"
}
export declare enum GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum {
    IndexableOptionUnspecified = "INDEXABLE_OPTION_UNSPECIFIED",
    IndexableEnabled = "INDEXABLE_ENABLED",
    IndexableDisabled = "INDEXABLE_DISABLED"
}
export declare enum GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum {
    RetrievableOptionUnspecified = "RETRIEVABLE_OPTION_UNSPECIFIED",
    RetrievableEnabled = "RETRIEVABLE_ENABLED",
    RetrievableDisabled = "RETRIEVABLE_DISABLED"
}
export declare enum GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum {
    SearchableOptionUnspecified = "SEARCHABLE_OPTION_UNSPECIFIED",
    SearchableEnabled = "SEARCHABLE_ENABLED",
    SearchableDisabled = "SEARCHABLE_DISABLED"
}
export declare enum GoogleCloudRetailV2CatalogAttributeTypeEnum {
    Unknown = "UNKNOWN",
    Textual = "TEXTUAL",
    Numerical = "NUMERICAL"
}
/**
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
export declare class GoogleCloudRetailV2CatalogAttributeInput extends SpeakeasyBase {
    dynamicFacetableOption?: GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum;
    exactSearchableOption?: GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum;
    indexableOption?: GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum;
    key?: string;
    retrievableOption?: GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum;
    searchableOption?: GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum;
}
/**
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
export declare class GoogleCloudRetailV2CatalogAttribute extends SpeakeasyBase {
    dynamicFacetableOption?: GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum;
    exactSearchableOption?: GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum;
    inUse?: boolean;
    indexableOption?: GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum;
    key?: string;
    retrievableOption?: GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum;
    searchableOption?: GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum;
    type?: GoogleCloudRetailV2CatalogAttributeTypeEnum;
}
