package shared

type GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnum string

const (
	GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnumCatalogItemLevelUnspecified GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnum = "CATALOG_ITEM_LEVEL_UNSPECIFIED"
	GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnumVariant                     GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnum = "VARIANT"
	GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnumMaster                      GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnum = "MASTER"
)

type GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnum string

const (
	GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnumCatalogItemLevelUnspecified GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnum = "CATALOG_ITEM_LEVEL_UNSPECIFIED"
	GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnumVariant                     GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnum = "VARIANT"
	GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnumMaster                      GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnum = "MASTER"
)

type GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfig struct {
	EventItemLevel   *GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigEventItemLevelEnum   `json:"eventItemLevel"`
	PredictItemLevel *GoogleCloudRecommendationengineV1beta1CatalogItemLevelConfigPredictItemLevelEnum `json:"predictItemLevel"`
}
