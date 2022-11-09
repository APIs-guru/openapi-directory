import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum {
    DynamicFacetableOptionUnspecified = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED"
,    DynamicFacetableEnabled = "DYNAMIC_FACETABLE_ENABLED"
,    DynamicFacetableDisabled = "DYNAMIC_FACETABLE_DISABLED"
}

export enum GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum {
    ExactSearchableOptionUnspecified = "EXACT_SEARCHABLE_OPTION_UNSPECIFIED"
,    ExactSearchableEnabled = "EXACT_SEARCHABLE_ENABLED"
,    ExactSearchableDisabled = "EXACT_SEARCHABLE_DISABLED"
}

export enum GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum {
    IndexableOptionUnspecified = "INDEXABLE_OPTION_UNSPECIFIED"
,    IndexableEnabled = "INDEXABLE_ENABLED"
,    IndexableDisabled = "INDEXABLE_DISABLED"
}

export enum GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum {
    RecommendationsFilteringOptionUnspecified = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED"
,    RecommendationsFilteringDisabled = "RECOMMENDATIONS_FILTERING_DISABLED"
,    RecommendationsFilteringEnabled = "RECOMMENDATIONS_FILTERING_ENABLED"
}

export enum GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum {
    SearchableOptionUnspecified = "SEARCHABLE_OPTION_UNSPECIFIED"
,    SearchableEnabled = "SEARCHABLE_ENABLED"
,    SearchableDisabled = "SEARCHABLE_DISABLED"
}

export enum GoogleCloudRetailV2alphaCatalogAttributeTypeEnum {
    Unknown = "UNKNOWN"
,    Textual = "TEXTUAL"
,    Numerical = "NUMERICAL"
}


// GoogleCloudRetailV2alphaCatalogAttribute
/** 
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
export class GoogleCloudRetailV2alphaCatalogAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamicFacetableOption" })
  dynamicFacetableOption?: GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum;

  @Metadata({ data: "json, name=exactSearchableOption" })
  exactSearchableOption?: GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum;

  @Metadata({ data: "json, name=inUse" })
  inUse?: boolean;

  @Metadata({ data: "json, name=indexableOption" })
  indexableOption?: GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=recommendationsFilteringOption" })
  recommendationsFilteringOption?: GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum;

  @Metadata({ data: "json, name=searchableOption" })
  searchableOption?: GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudRetailV2alphaCatalogAttributeTypeEnum;
}
