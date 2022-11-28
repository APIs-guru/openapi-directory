package shared

// GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse
// Response message for ListCatalogItems method.
type GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse struct {
	CatalogItems  []GoogleCloudRecommendationengineV1beta1CatalogItem `json:"catalogItems,omitempty"`
	NextPageToken *string                                             `json:"nextPageToken,omitempty"`
}
