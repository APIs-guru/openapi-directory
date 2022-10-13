package shared

type GoogleCloudRecommendationengineV1beta1ListCatalogsResponse struct {
	Catalogs      []GoogleCloudRecommendationengineV1beta1Catalog `json:"catalogs"`
	NextPageToken *string                                         `json:"nextPageToken"`
}
