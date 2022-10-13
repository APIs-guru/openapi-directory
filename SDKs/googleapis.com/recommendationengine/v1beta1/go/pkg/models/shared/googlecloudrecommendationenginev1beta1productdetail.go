package shared

type GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum string

const (
	GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumStockStateUnspecified GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum = "STOCK_STATE_UNSPECIFIED"
	GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumInStock               GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum = "IN_STOCK"
	GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumOutOfStock            GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum = "OUT_OF_STOCK"
	GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumPreorder              GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum = "PREORDER"
	GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumBackorder             GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum = "BACKORDER"
)

type GoogleCloudRecommendationengineV1beta1ProductDetail struct {
	AvailableQuantity *int32                                                             `json:"availableQuantity"`
	CurrencyCode      *string                                                            `json:"currencyCode"`
	DisplayPrice      *float32                                                           `json:"displayPrice"`
	ID                *string                                                            `json:"id"`
	ItemAttributes    *GoogleCloudRecommendationengineV1beta1FeatureMap                  `json:"itemAttributes"`
	OriginalPrice     *float32                                                           `json:"originalPrice"`
	Quantity          *int32                                                             `json:"quantity"`
	StockState        *GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum `json:"stockState"`
}
