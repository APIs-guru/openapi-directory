import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaProduct } from "./googlecloudretailv2betaproduct";
import { GoogleCloudRetailV2betaProductInput } from "./googlecloudretailv2betaproduct";



// GoogleCloudRetailV2betaProductDetail
/** 
 * Detailed product information associated with a user event.
**/
export class GoogleCloudRetailV2betaProductDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: GoogleCloudRetailV2betaProduct;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}


// GoogleCloudRetailV2betaProductDetailInput
/** 
 * Detailed product information associated with a user event.
**/
export class GoogleCloudRetailV2betaProductDetailInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: GoogleCloudRetailV2betaProductInput;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}
