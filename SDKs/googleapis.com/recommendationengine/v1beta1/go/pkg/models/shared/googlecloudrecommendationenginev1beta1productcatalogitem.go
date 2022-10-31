package shared




type GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum string

const (
    GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumStockStateUnspecified GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum = "STOCK_STATE_UNSPECIFIED"
GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumInStock GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum = "IN_STOCK"
GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumOutOfStock GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum = "OUT_OF_STOCK"
GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumPreorder GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum = "PREORDER"
GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnumBackorder GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum = "BACKORDER"
)


type GoogleCloudRecommendationengineV1beta1ProductCatalogItem struct {
    AvailableQuantity *string `json:"availableQuantity,omitempty"`
    CanonicalProductURI *string `json:"canonicalProductUri,omitempty"`
    Costs map[string]float32 `json:"costs,omitempty"`
    CurrencyCode *string `json:"currencyCode,omitempty"`
    ExactPrice *GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice `json:"exactPrice,omitempty"`
    Images []GoogleCloudRecommendationengineV1beta1Image `json:"images,omitempty"`
    PriceRange *GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange `json:"priceRange,omitempty"`
    StockState *GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum `json:"stockState,omitempty"`
    
}

