import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { GeoTaxonomy } from "./geotaxonomy";
import { PricingInfo } from "./pricinginfo";



// Sku
/** 
 * Encapsulates a single SKU in Google Cloud Platform
**/
export class Sku extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: Category;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=geoTaxonomy" })
  geoTaxonomy?: GeoTaxonomy;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pricingInfo", elemType: PricingInfo })
  pricingInfo?: PricingInfo[];

  @SpeakeasyMetadata({ data: "json, name=serviceProviderName" })
  serviceProviderName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceRegions" })
  serviceRegions?: string[];

  @SpeakeasyMetadata({ data: "json, name=skuId" })
  skuId?: string;
}
