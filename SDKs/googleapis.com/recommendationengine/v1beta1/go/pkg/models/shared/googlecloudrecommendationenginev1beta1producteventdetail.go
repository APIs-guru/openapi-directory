package shared

// GoogleCloudRecommendationengineV1beta1ProductEventDetail
// ProductEventDetail captures user event information specific to retail products.
type GoogleCloudRecommendationengineV1beta1ProductEventDetail struct {
	CartID              *string                                                              `json:"cartId,omitempty"`
	ListID              *string                                                              `json:"listId,omitempty"`
	PageCategories      []GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy `json:"pageCategories,omitempty"`
	ProductDetails      []GoogleCloudRecommendationengineV1beta1ProductDetail                `json:"productDetails,omitempty"`
	PurchaseTransaction *GoogleCloudRecommendationengineV1beta1PurchaseTransaction           `json:"purchaseTransaction,omitempty"`
	SearchQuery         *string                                                              `json:"searchQuery,omitempty"`
}
