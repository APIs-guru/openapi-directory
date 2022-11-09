import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2betaInterval } from "./googlecloudretailv2betainterval";
import { GoogleCloudRetailV2betaInterval } from "./googlecloudretailv2betainterval";


// GoogleCloudRetailV2betaPriceInfoPriceRange
/** 
 * The price range of all variant Product having the same Product.primary_product_id.
**/
export class GoogleCloudRetailV2betaPriceInfoPriceRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=originalPrice" })
  originalPrice?: GoogleCloudRetailV2betaInterval;

  @Metadata({ data: "json, name=price" })
  price?: GoogleCloudRetailV2betaInterval;
}
