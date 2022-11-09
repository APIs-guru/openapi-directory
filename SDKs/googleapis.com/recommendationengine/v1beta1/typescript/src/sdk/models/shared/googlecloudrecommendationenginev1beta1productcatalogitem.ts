import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice } from "./googlecloudrecommendationenginev1beta1productcatalogitemexactprice";
import { GoogleCloudRecommendationengineV1beta1Image } from "./googlecloudrecommendationenginev1beta1image";
import { GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange } from "./googlecloudrecommendationenginev1beta1productcatalogitempricerange";

export enum GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum {
    StockStateUnspecified = "STOCK_STATE_UNSPECIFIED"
,    InStock = "IN_STOCK"
,    OutOfStock = "OUT_OF_STOCK"
,    Preorder = "PREORDER"
,    Backorder = "BACKORDER"
}


// GoogleCloudRecommendationengineV1beta1ProductCatalogItem
/** 
 * ProductCatalogItem captures item metadata specific to retail products.
**/
export class GoogleCloudRecommendationengineV1beta1ProductCatalogItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableQuantity" })
  availableQuantity?: string;

  @Metadata({ data: "json, name=canonicalProductUri" })
  canonicalProductUri?: string;

  @Metadata({ data: "json, name=costs" })
  costs?: Map<string, number>;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=exactPrice" })
  exactPrice?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice;

  @Metadata({ data: "json, name=images", elemType: shared.GoogleCloudRecommendationengineV1beta1Image })
  images?: GoogleCloudRecommendationengineV1beta1Image[];

  @Metadata({ data: "json, name=priceRange" })
  priceRange?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange;

  @Metadata({ data: "json, name=stockState" })
  stockState?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum;
}
