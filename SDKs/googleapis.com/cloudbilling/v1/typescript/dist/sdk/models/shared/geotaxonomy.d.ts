import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GeoTaxonomyTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Global = "GLOBAL",
    Regional = "REGIONAL",
    MultiRegional = "MULTI_REGIONAL"
}
/**
 * Encapsulates the geographic taxonomy data for a sku.
**/
export declare class GeoTaxonomy extends SpeakeasyBase {
    regions?: string[];
    type?: GeoTaxonomyTypeEnum;
}
