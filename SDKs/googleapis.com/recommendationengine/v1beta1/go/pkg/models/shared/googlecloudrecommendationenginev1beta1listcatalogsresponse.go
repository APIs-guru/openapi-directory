package shared

// GoogleCloudRecommendationengineV1beta1ListCatalogsResponse
// Response for ListCatalogs method.
type GoogleCloudRecommendationengineV1beta1ListCatalogsResponse struct {
	Catalogs      []GoogleCloudRecommendationengineV1beta1Catalog `json:"catalogs,omitempty"`
	NextPageToken *string                                         `json:"nextPageToken,omitempty"`
}
