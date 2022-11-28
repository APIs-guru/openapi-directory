import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaProduct } from "./googlecloudretailv2alphaproduct";
import { GoogleCloudRetailV2alphaProductInput } from "./googlecloudretailv2alphaproduct";



// GoogleCloudRetailV2alphaProductDetail
/** 
 * Detailed product information associated with a user event.
**/
export class GoogleCloudRetailV2alphaProductDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: GoogleCloudRetailV2alphaProduct;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}


// GoogleCloudRetailV2alphaProductDetailInput
/** 
 * Detailed product information associated with a user event.
**/
export class GoogleCloudRetailV2alphaProductDetailInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: GoogleCloudRetailV2alphaProductInput;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}
