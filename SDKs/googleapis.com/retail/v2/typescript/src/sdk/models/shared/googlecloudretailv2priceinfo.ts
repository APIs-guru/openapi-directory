import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2PriceInfoPriceRange } from "./googlecloudretailv2priceinfopricerange";


// GoogleCloudRetailV2PriceInfo
/** 
 * The price information of a Product.
**/
export class GoogleCloudRetailV2PriceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=cost" })
  cost?: number;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=originalPrice" })
  originalPrice?: number;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=priceEffectiveTime" })
  priceEffectiveTime?: string;

  @Metadata({ data: "json, name=priceExpireTime" })
  priceExpireTime?: string;

  @Metadata({ data: "json, name=priceRange" })
  priceRange?: GoogleCloudRetailV2PriceInfoPriceRange;
}
