import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRetailV2alphaCatalogAttributeTypeEnum {
    Unknown = "UNKNOWN",
    Textual = "TEXTUAL",
    Numerical = "NUMERICAL"
}

export enum GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum {
    DynamicFacetableOptionUnspecified = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
    DynamicFacetableEnabled = "DYNAMIC_FACETABLE_ENABLED",
    DynamicFacetableDisabled = "DYNAMIC_FACETABLE_DISABLED"
}

export enum GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum {
    ExactSearchableOptionUnspecified = "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
    ExactSearchableEnabled = "EXACT_SEARCHABLE_ENABLED",
    ExactSearchableDisabled = "EXACT_SEARCHABLE_DISABLED"
}

export enum GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum {
    IndexableOptionUnspecified = "INDEXABLE_OPTION_UNSPECIFIED",
    IndexableEnabled = "INDEXABLE_ENABLED",
    IndexableDisabled = "INDEXABLE_DISABLED"
}

export enum GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum {
    RecommendationsFilteringOptionUnspecified = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
    RecommendationsFilteringDisabled = "RECOMMENDATIONS_FILTERING_DISABLED",
    RecommendationsFilteringEnabled = "RECOMMENDATIONS_FILTERING_ENABLED"
}

export enum GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum {
    RetrievableOptionUnspecified = "RETRIEVABLE_OPTION_UNSPECIFIED",
    RetrievableEnabled = "RETRIEVABLE_ENABLED",
    RetrievableDisabled = "RETRIEVABLE_DISABLED"
}

export enum GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum {
    SearchableOptionUnspecified = "SEARCHABLE_OPTION_UNSPECIFIED",
    SearchableEnabled = "SEARCHABLE_ENABLED",
    SearchableDisabled = "SEARCHABLE_DISABLED"
}


// GoogleCloudRetailV2alphaCatalogAttribute
/** 
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
export class GoogleCloudRetailV2alphaCatalogAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicFacetableOption" })
  dynamicFacetableOption?: GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=exactSearchableOption" })
  exactSearchableOption?: GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=inUse" })
  inUse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=indexableOption" })
  indexableOption?: GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendationsFilteringOption" })
  recommendationsFilteringOption?: GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=retrievableOption" })
  retrievableOption?: GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=searchableOption" })
  searchableOption?: GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudRetailV2alphaCatalogAttributeTypeEnum;
}


// GoogleCloudRetailV2alphaCatalogAttributeInput
/** 
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
export class GoogleCloudRetailV2alphaCatalogAttributeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicFacetableOption" })
  dynamicFacetableOption?: GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=exactSearchableOption" })
  exactSearchableOption?: GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=indexableOption" })
  indexableOption?: GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendationsFilteringOption" })
  recommendationsFilteringOption?: GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=retrievableOption" })
  retrievableOption?: GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=searchableOption" })
  searchableOption?: GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum;
}
