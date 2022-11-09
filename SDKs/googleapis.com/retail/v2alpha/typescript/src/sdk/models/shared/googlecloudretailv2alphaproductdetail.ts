import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaProduct } from "./googlecloudretailv2alphaproduct";


// GoogleCloudRetailV2alphaProductDetail
/** 
 * Detailed product information associated with a user event.
**/
export class GoogleCloudRetailV2alphaProductDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=product" })
  product?: GoogleCloudRetailV2alphaProduct;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;
}
