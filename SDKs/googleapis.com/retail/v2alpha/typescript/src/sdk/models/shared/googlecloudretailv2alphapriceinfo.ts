import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaPriceInfoPriceRange } from "./googlecloudretailv2alphapriceinfopricerange";


// GoogleCloudRetailV2alphaPriceInfo
/** 
 * The price information of a Product.
**/
export class GoogleCloudRetailV2alphaPriceInfo extends SpeakeasyBase {
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
  priceRange?: GoogleCloudRetailV2alphaPriceInfoPriceRange;
}
