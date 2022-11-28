import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaInterval } from "./googlecloudretailv2alphainterval";



// GoogleCloudRetailV2alphaPriceInfoPriceRange
/** 
 * The price range of all variant Product having the same Product.primary_product_id.
**/
export class GoogleCloudRetailV2alphaPriceInfoPriceRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=originalPrice" })
  originalPrice?: GoogleCloudRetailV2alphaInterval;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: GoogleCloudRetailV2alphaInterval;
}
