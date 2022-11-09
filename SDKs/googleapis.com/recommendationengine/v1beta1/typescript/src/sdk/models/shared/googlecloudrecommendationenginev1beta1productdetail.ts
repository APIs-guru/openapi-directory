import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRecommendationengineV1beta1FeatureMap } from "./googlecloudrecommendationenginev1beta1featuremap";

export enum GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum {
    StockStateUnspecified = "STOCK_STATE_UNSPECIFIED"
,    InStock = "IN_STOCK"
,    OutOfStock = "OUT_OF_STOCK"
,    Preorder = "PREORDER"
,    Backorder = "BACKORDER"
}


// GoogleCloudRecommendationengineV1beta1ProductDetail
/** 
 * Detailed product information associated with a user event.
**/
export class GoogleCloudRecommendationengineV1beta1ProductDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableQuantity" })
  availableQuantity?: number;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=displayPrice" })
  displayPrice?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=itemAttributes" })
  itemAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap;

  @Metadata({ data: "json, name=originalPrice" })
  originalPrice?: number;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=stockState" })
  stockState?: GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum;
}
