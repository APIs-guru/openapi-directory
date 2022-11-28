import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice } from "./googlecloudrecommendationenginev1beta1productcatalogitemexactprice";
import { GoogleCloudRecommendationengineV1beta1Image } from "./googlecloudrecommendationenginev1beta1image";
import { GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange } from "./googlecloudrecommendationenginev1beta1productcatalogitempricerange";
export declare enum GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum {
    StockStateUnspecified = "STOCK_STATE_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    Preorder = "PREORDER",
    Backorder = "BACKORDER"
}
/**
 * ProductCatalogItem captures item metadata specific to retail products.
**/
export declare class GoogleCloudRecommendationengineV1beta1ProductCatalogItem extends SpeakeasyBase {
    availableQuantity?: string;
    canonicalProductUri?: string;
    costs?: Map<string, number>;
    currencyCode?: string;
    exactPrice?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice;
    images?: GoogleCloudRecommendationengineV1beta1Image[];
    priceRange?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange;
    stockState?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum;
}
