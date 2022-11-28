import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum {
    DynamicFacetableOptionUnspecified = "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
    DynamicFacetableEnabled = "DYNAMIC_FACETABLE_ENABLED",
    DynamicFacetableDisabled = "DYNAMIC_FACETABLE_DISABLED"
}

export enum GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum {
    ExactSearchableOptionUnspecified = "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
    ExactSearchableEnabled = "EXACT_SEARCHABLE_ENABLED",
    ExactSearchableDisabled = "EXACT_SEARCHABLE_DISABLED"
}

export enum GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum {
    IndexableOptionUnspecified = "INDEXABLE_OPTION_UNSPECIFIED",
    IndexableEnabled = "INDEXABLE_ENABLED",
    IndexableDisabled = "INDEXABLE_DISABLED"
}

export enum GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum {
    RetrievableOptionUnspecified = "RETRIEVABLE_OPTION_UNSPECIFIED",
    RetrievableEnabled = "RETRIEVABLE_ENABLED",
    RetrievableDisabled = "RETRIEVABLE_DISABLED"
}

export enum GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum {
    SearchableOptionUnspecified = "SEARCHABLE_OPTION_UNSPECIFIED",
    SearchableEnabled = "SEARCHABLE_ENABLED",
    SearchableDisabled = "SEARCHABLE_DISABLED"
}

export enum GoogleCloudRetailV2CatalogAttributeTypeEnum {
    Unknown = "UNKNOWN",
    Textual = "TEXTUAL",
    Numerical = "NUMERICAL"
}


// GoogleCloudRetailV2CatalogAttributeInput
/** 
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
export class GoogleCloudRetailV2CatalogAttributeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicFacetableOption" })
  dynamicFacetableOption?: GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=exactSearchableOption" })
  exactSearchableOption?: GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=indexableOption" })
  indexableOption?: GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=retrievableOption" })
  retrievableOption?: GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=searchableOption" })
  searchableOption?: GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum;
}


// GoogleCloudRetailV2CatalogAttribute
/** 
 * Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.
**/
export class GoogleCloudRetailV2CatalogAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicFacetableOption" })
  dynamicFacetableOption?: GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=exactSearchableOption" })
  exactSearchableOption?: GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=inUse" })
  inUse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=indexableOption" })
  indexableOption?: GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=retrievableOption" })
  retrievableOption?: GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=searchableOption" })
  searchableOption?: GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudRetailV2CatalogAttributeTypeEnum;
}
