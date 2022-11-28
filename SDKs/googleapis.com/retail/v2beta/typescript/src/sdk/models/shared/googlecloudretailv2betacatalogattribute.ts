import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRetailV2betaCatalogAttributeTypeEnum {
    Unknown = "UNKNOWN",
    Textual = "TEXTUAL",
    Numerical = "NUMERICAL"
}

export enum GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum {
    DynamicFacetableOptionUnspecified = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
    DynamicFacetableEnabled = "DYNAMIC_FACETABLE_ENABLED",
    DynamicFacetableDisabled = "DYNAMIC_FACETABLE_DISABLED"
}

export enum GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum {
    ExactSearchableOptionUnspecified = "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
    ExactSearchableEnabled = "EXACT_SEARCHABLE_ENABLED",
    ExactSearchableDisabled = "EXACT_SEARCHABLE_DISABLED"
}

export enum GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum {
    IndexableOptionUnspecified = "INDEXABLE_OPTION_UNSPECIFIED",
    IndexableEnabled = "INDEXABLE_ENABLED",
    IndexableDisabled = "INDEXABLE_DISABLED"
}

export enum GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum {
    RecommendationsFilteringOptionUnspecified = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
    RecommendationsFilteringDisabled = "RECOMMENDATIONS_FILTERING_DISABLED",
    RecommendationsFilteringEnabled = "RECOMMENDATIONS_FILTERING_ENABLED"
}

export enum GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum {
    RetrievableOptionUnspecified = "RETRIEVABLE_OPTION_UNSPECIFIED",
    RetrievableEnabled = "RETRIEVABLE_ENABLED",
    RetrievableDisabled = "RETRIEVABLE_DISABLED"
}

export enum GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum {
    SearchableOptionUnspecified = "SEARCHABLE_OPTION_UNSPECIFIED",
    SearchableEnabled = "SEARCHABLE_ENABLED",
    SearchableDisabled = "SEARCHABLE_DISABLED"
}


// GoogleCloudRetailV2betaCatalogAttribute
/** 
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
export class GoogleCloudRetailV2betaCatalogAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicFacetableOption" })
  dynamicFacetableOption?: GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=exactSearchableOption" })
  exactSearchableOption?: GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=inUse" })
  inUse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=indexableOption" })
  indexableOption?: GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendationsFilteringOption" })
  recommendationsFilteringOption?: GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=retrievableOption" })
  retrievableOption?: GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=searchableOption" })
  searchableOption?: GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudRetailV2betaCatalogAttributeTypeEnum;
}


// GoogleCloudRetailV2betaCatalogAttributeInput
/** 
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
export class GoogleCloudRetailV2betaCatalogAttributeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicFacetableOption" })
  dynamicFacetableOption?: GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=exactSearchableOption" })
  exactSearchableOption?: GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=indexableOption" })
  indexableOption?: GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=recommendationsFilteringOption" })
  recommendationsFilteringOption?: GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=retrievableOption" })
  retrievableOption?: GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=searchableOption" })
  searchableOption?: GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum;
}
