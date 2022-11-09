import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnum {
    CatalogItemLevelUnspecified = "CATALOG_ITEM_LEVEL_UNSPECIFIED"
,    Variant = "VARIANT"
,    Master = "MASTER"
}

export enum GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnum {
    CatalogItemLevelUnspecified = "CATALOG_ITEM_LEVEL_UNSPECIFIED"
,    Variant = "VARIANT"
,    Master = "MASTER"
}


// GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig
/** 
 * Configures the catalog level that users send events to, and the level at which predictions are made.
**/
export class GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventItemLevel" })
  eventItemLevel?: GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnum;

  @Metadata({ data: "json, name=predictItemLevel" })
  predictItemLevel?: GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnum;
}
