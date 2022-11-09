import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2Interval } from "./googlecloudretailv2interval";
import { GoogleCloudRetailV2Interval } from "./googlecloudretailv2interval";


// GoogleCloudRetailV2PriceInfoPriceRange
/** 
 * The price range of all variant Product having the same Product.primary_product_id.
**/
export class GoogleCloudRetailV2PriceInfoPriceRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=originalPrice" })
  originalPrice?: GoogleCloudRetailV2Interval;

  @Metadata({ data: "json, name=price" })
  price?: GoogleCloudRetailV2Interval;
}
