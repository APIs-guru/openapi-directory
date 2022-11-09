import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaInterval } from "./googlecloudretailv2alphainterval";
import { GoogleCloudRetailV2alphaInterval } from "./googlecloudretailv2alphainterval";


// GoogleCloudRetailV2alphaPriceInfoPriceRange
/** 
 * The price range of all variant Product having the same Product.primary_product_id.
**/
export class GoogleCloudRetailV2alphaPriceInfoPriceRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=originalPrice" })
  originalPrice?: GoogleCloudRetailV2alphaInterval;

  @Metadata({ data: "json, name=price" })
  price?: GoogleCloudRetailV2alphaInterval;
}
