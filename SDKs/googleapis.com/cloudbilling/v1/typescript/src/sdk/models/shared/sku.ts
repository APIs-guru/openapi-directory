import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Category } from "./category";
import { GeoTaxonomy } from "./geotaxonomy";
import { PricingInfo } from "./pricinginfo";


// Sku
/** 
 * Encapsulates a single SKU in Google Cloud Platform
**/
export class Sku extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: Category;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=geoTaxonomy" })
  geoTaxonomy?: GeoTaxonomy;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pricingInfo", elemType: shared.PricingInfo })
  pricingInfo?: PricingInfo[];

  @Metadata({ data: "json, name=serviceProviderName" })
  serviceProviderName?: string;

  @Metadata({ data: "json, name=serviceRegions" })
  serviceRegions?: string[];

  @Metadata({ data: "json, name=skuId" })
  skuId?: string;
}
