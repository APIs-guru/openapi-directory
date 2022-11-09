import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum {
    DynamicFacetableOptionUnspecified = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED"
,    DynamicFacetableEnabled = "DYNAMIC_FACETABLE_ENABLED"
,    DynamicFacetableDisabled = "DYNAMIC_FACETABLE_DISABLED"
}

export enum GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum {
    IndexableOptionUnspecified = "INDEXABLE_OPTION_UNSPECIFIED"
,    IndexableEnabled = "INDEXABLE_ENABLED"
,    IndexableDisabled = "INDEXABLE_DISABLED"
}

export enum GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum {
    SearchableOptionUnspecified = "SEARCHABLE_OPTION_UNSPECIFIED"
,    SearchableEnabled = "SEARCHABLE_ENABLED"
,    SearchableDisabled = "SEARCHABLE_DISABLED"
}

export enum GoogleCloudRetailV2CatalogAttributeTypeEnum {
    Unknown = "UNKNOWN"
,    Textual = "TEXTUAL"
,    Numerical = "NUMERICAL"
}


// GoogleCloudRetailV2CatalogAttribute
/** 
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
export class GoogleCloudRetailV2CatalogAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamicFacetableOption" })
  dynamicFacetableOption?: GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum;

  @Metadata({ data: "json, name=inUse" })
  inUse?: boolean;

  @Metadata({ data: "json, name=indexableOption" })
  indexableOption?: GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=searchableOption" })
  searchableOption?: GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudRetailV2CatalogAttributeTypeEnum;
}
