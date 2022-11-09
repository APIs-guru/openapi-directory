import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GeoTaxonomyTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Global = "GLOBAL"
,    Regional = "REGIONAL"
,    MultiRegional = "MULTI_REGIONAL"
}


// GeoTaxonomy
/** 
 * Encapsulates the geographic taxonomy data for a sku.
**/
export class GeoTaxonomy extends SpeakeasyBase {
  @Metadata({ data: "json, name=regions" })
  regions?: string[];

  @Metadata({ data: "json, name=type" })
  type?: GeoTaxonomyTypeEnum;
}
