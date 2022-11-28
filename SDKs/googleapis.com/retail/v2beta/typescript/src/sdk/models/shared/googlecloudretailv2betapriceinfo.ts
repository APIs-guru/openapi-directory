import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaPriceInfoPriceRange } from "./googlecloudretailv2betapriceinfopricerange";



// GoogleCloudRetailV2betaPriceInfo
/** 
 * The price information of a Product.
**/
export class GoogleCloudRetailV2betaPriceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: number;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=originalPrice" })
  originalPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=priceEffectiveTime" })
  priceEffectiveTime?: string;

  @SpeakeasyMetadata({ data: "json, name=priceExpireTime" })
  priceExpireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=priceRange" })
  priceRange?: GoogleCloudRetailV2betaPriceInfoPriceRange;
}
