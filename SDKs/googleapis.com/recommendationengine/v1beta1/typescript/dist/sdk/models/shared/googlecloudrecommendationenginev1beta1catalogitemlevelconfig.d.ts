import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnum {
    CatalogItemLevelUnspecified = "CATALOG_ITEM_LEVEL_UNSPECIFIED",
    Variant = "VARIANT",
    Master = "MASTER"
}
export declare enum GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnum {
    CatalogItemLevelUnspecified = "CATALOG_ITEM_LEVEL_UNSPECIFIED",
    Variant = "VARIANT",
    Master = "MASTER"
}
/**
 * Configures the catalog level that users send events to, and the level at which predictions are made.
**/
export declare class GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig extends SpeakeasyBase {
    eventItemLevel?: GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnum;
    predictItemLevel?: GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnum;
}
