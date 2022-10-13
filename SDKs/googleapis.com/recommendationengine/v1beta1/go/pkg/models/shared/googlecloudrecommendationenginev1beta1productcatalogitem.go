package shared

type GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum string

const (
	GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumStockStateUnspecified GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum = "STOCK_STATE_UNSPECIFIED"
	GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumInStock               GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum = "IN_STOCK"
	GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumOutOfStock            GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum = "OUT_OF_STOCK"
	GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumPreorder              GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum = "PREORDER"
	GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumBackorder             GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum = "BACKORDER"
)

type GoogleCloudRecommendationengineV1beta1ProductCatalogItem struct {
	AvailableQuantity   *string                                                                 `json:"availableQuantity"`
	CanonicalProductURI *string                                                                 `json:"canonicalProductUri"`
	Costs               map[string]float32                                                      `json:"costs"`
	CurrencyCode        *string                                                                 `json:"currencyCode"`
	ExactPrice          *GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice     `json:"exactPrice"`
	Images              []GoogleCloudRecommendationengineV1beta1Image                           `json:"images"`
	PriceRange          *GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange     `json:"priceRange"`
	StockState          *GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum `json:"stockState"`
}
