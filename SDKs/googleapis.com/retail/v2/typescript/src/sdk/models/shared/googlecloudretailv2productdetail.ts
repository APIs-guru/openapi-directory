import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2ProductInput } from "./googlecloudretailv2product";
import { GoogleCloudRetailV2Product } from "./googlecloudretailv2product";



// GoogleCloudRetailV2ProductDetailInput
/** 
 * Detailed product information associated with a user event.
**/
export class GoogleCloudRetailV2ProductDetailInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: GoogleCloudRetailV2ProductInput;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}


// GoogleCloudRetailV2ProductDetail
/** 
 * Detailed product information associated with a user event.
**/
export class GoogleCloudRetailV2ProductDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: GoogleCloudRetailV2Product;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}
