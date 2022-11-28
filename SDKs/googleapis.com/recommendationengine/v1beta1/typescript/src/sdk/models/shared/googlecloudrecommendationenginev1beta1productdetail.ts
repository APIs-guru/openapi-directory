import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1FeatureMap } from "./googlecloudrecommendationenginev1beta1featuremap";


export enum GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum {
    StockStateUnspecified = "STOCK_STATE_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    Preorder = "PREORDER",
    Backorder = "BACKORDER"
}


// GoogleCloudRecommendationengineV1beta1ProductDetail
/** 
 * Detailed product information associated with a user event.
**/
export class GoogleCloudRecommendationengineV1beta1ProductDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableQuantity" })
  availableQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=displayPrice" })
  displayPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=itemAttributes" })
  itemAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap;

  @SpeakeasyMetadata({ data: "json, name=originalPrice" })
  originalPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=stockState" })
  stockState?: GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum;
}
