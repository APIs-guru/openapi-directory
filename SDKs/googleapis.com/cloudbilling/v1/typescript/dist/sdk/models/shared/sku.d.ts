import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { GeoTaxonomy } from "./geotaxonomy";
import { PricingInfo } from "./pricinginfo";
/**
 * Encapsulates a single SKU in Google Cloud Platform
**/
export declare class Sku extends SpeakeasyBase {
    category?: Category;
    description?: string;
    geoTaxonomy?: GeoTaxonomy;
    name?: string;
    pricingInfo?: PricingInfo[];
    serviceProviderName?: string;
    serviceRegions?: string[];
    skuId?: string;
}
