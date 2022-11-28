import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice } from "./googlecloudrecommendationenginev1beta1productcatalogitemexactprice";
import { GoogleCloudRecommendationengineV1beta1Image } from "./googlecloudrecommendationenginev1beta1image";
import { GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange } from "./googlecloudrecommendationenginev1beta1productcatalogitempricerange";


export enum GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum {
    StockStateUnspecified = "STOCK_STATE_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    Preorder = "PREORDER",
    Backorder = "BACKORDER"
}


// GoogleCloudRecommendationengineV1beta1ProductCatalogItem
/** 
 * ProductCatalogItem captures item metadata specific to retail products.
**/
export class GoogleCloudRecommendationengineV1beta1ProductCatalogItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableQuantity" })
  availableQuantity?: string;

  @SpeakeasyMetadata({ data: "json, name=canonicalProductUri" })
  canonicalProductUri?: string;

  @SpeakeasyMetadata({ data: "json, name=costs" })
  costs?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=exactPrice" })
  exactPrice?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice;

  @SpeakeasyMetadata({ data: "json, name=images", elemType: GoogleCloudRecommendationengineV1beta1Image })
  images?: GoogleCloudRecommendationengineV1beta1Image[];

  @SpeakeasyMetadata({ data: "json, name=priceRange" })
  priceRange?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange;

  @SpeakeasyMetadata({ data: "json, name=stockState" })
  stockState?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum;
}
