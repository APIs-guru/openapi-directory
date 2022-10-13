package shared

type GoogleCloudRecommenderV1beta1ListRecommendationsResponse struct {
	NextPageToken   *string                                       `json:"nextPageToken"`
	Recommendations []GoogleCloudRecommenderV1beta1Recommendation `json:"recommendations"`
}
