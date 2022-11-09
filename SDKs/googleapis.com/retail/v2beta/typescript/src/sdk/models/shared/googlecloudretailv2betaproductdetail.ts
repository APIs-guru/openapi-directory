import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2betaProduct } from "./googlecloudretailv2betaproduct";


// GoogleCloudRetailV2betaProductDetail
/** 
 * Detailed product information associated with a user event.
**/
export class GoogleCloudRetailV2betaProductDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=product" })
  product?: GoogleCloudRetailV2betaProduct;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;
}
