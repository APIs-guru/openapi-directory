import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1FeatureMap } from "./googlecloudrecommendationenginev1beta1featuremap";
export declare enum GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum {
    StockStateUnspecified = "STOCK_STATE_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    Preorder = "PREORDER",
    Backorder = "BACKORDER"
}
/**
 * Detailed product information associated with a user event.
**/
export declare class GoogleCloudRecommendationengineV1beta1ProductDetail extends SpeakeasyBase {
    availableQuantity?: number;
    currencyCode?: string;
    displayPrice?: number;
    id?: string;
    itemAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap;
    originalPrice?: number;
    quantity?: number;
    stockState?: GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum;
}
