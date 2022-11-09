import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2Product } from "./googlecloudretailv2product";


// GoogleCloudRetailV2ProductDetail
/** 
 * Detailed product information associated with a user event.
**/
export class GoogleCloudRetailV2ProductDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=product" })
  product?: GoogleCloudRetailV2Product;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;
}
