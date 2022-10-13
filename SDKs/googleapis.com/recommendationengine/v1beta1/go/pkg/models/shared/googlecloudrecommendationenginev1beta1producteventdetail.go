package shared

type GoogleCloudRecommendationengineV1beta1ProductEventDetail struct {
	CartID              *string                                                              `json:"cartId"`
	ListID              *string                                                              `json:"listId"`
	PageCategories      []GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy `json:"pageCategories"`
	ProductDetails      []GoogleCloudRecommendationengineV1beta1ProductDetail                `json:"productDetails"`
	PurchaseTransaction *GoogleCloudRecommendationengineV1beta1PurchaseTransaction           `json:"purchaseTransaction"`
	SearchQuery         *string                                                              `json:"searchQuery"`
}
