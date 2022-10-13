package shared

type GoogleCloudRecommendationengineV1beta1ListCatalogItemsResponse struct {
	CatalogItems  []GoogleCloudRecommendationengineV1beta1CatalogItem `json:"catalogItems"`
	NextPageToken *string                                             `json:"nextPageToken"`
}
