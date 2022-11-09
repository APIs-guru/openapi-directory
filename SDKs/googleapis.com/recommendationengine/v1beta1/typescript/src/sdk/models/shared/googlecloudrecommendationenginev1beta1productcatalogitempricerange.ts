import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange
/** 
 * Product price range when there are a range of prices for different variations of the same product.
**/
export class GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=max" })
  max?: number;

  @Metadata({ data: "json, name=min" })
  min?: number;
}
