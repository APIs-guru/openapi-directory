package shared

type GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum string

const (
	GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumStockStateUnspecified GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum = "STOCK_STATE_UNSPECIFIED"
	GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumInStock               GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum = "IN_STOCK"
	GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumOutOfStock            GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum = "OUT_OF_STOCK"
	GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumPreorder              GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum = "PREORDER"
	GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnumBackorder             GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum = "BACKORDER"
)

// GoogleCloudRecommendationengineV1beta1ProductDetail
// Detailed product information associated with a user event.
type GoogleCloudRecommendationengineV1beta1ProductDetail struct {
	AvailableQuantity *int32                                                             `json:"availableQuantity,omitempty"`
	CurrencyCode      *string                                                            `json:"currencyCode,omitempty"`
	DisplayPrice      *float32                                                           `json:"displayPrice,omitempty"`
	ID                *string                                                            `json:"id,omitempty"`
	ItemAttributes    *GoogleCloudRecommendationengineV1beta1FeatureMap                  `json:"itemAttributes,omitempty"`
	OriginalPrice     *float32                                                           `json:"originalPrice,omitempty"`
	Quantity          *int32                                                             `json:"quantity,omitempty"`
	StockState        *GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum `json:"stockState,omitempty"`
}
