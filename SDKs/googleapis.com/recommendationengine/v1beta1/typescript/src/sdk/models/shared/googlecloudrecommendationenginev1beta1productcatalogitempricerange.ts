import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange
/** 
 * Product price range when there are a range of prices for different variations of the same product.
**/
export class GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: number;
}
