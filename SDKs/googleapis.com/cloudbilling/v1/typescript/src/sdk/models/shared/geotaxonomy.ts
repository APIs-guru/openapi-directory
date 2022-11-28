import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GeoTaxonomyTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Global = "GLOBAL",
    Regional = "REGIONAL",
    MultiRegional = "MULTI_REGIONAL"
}


// GeoTaxonomy
/** 
 * Encapsulates the geographic taxonomy data for a sku.
**/
export class GeoTaxonomy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regions" })
  regions?: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GeoTaxonomyTypeEnum;
}
