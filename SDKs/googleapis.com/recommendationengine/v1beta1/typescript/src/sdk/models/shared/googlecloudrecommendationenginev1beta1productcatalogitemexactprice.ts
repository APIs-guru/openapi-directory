import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice
/** 
 * Exact product price.
**/
export class GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayPrice" })
  displayPrice?: number;

  @Metadata({ data: "json, name=originalPrice" })
  originalPrice?: number;
}
