import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2Interval } from "./googlecloudretailv2interval";



// GoogleCloudRetailV2PriceInfoPriceRange
/** 
 * The price range of all variant Product having the same Product.primary_product_id.
**/
export class GoogleCloudRetailV2PriceInfoPriceRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=originalPrice" })
  originalPrice?: GoogleCloudRetailV2Interval;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: GoogleCloudRetailV2Interval;
}
