import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice
/** 
 * Exact product price.
**/
export class GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayPrice" })
  displayPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=originalPrice" })
  originalPrice?: number;
}
