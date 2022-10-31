package shared

type GoogleCloudRecommenderV1beta1ListRecommendationsResponse struct {
	NextPageToken   *string                                       `json:"nextPageToken,omitempty"`
	Recommendations []GoogleCloudRecommenderV1beta1Recommendation `json:"recommendations,omitempty"`
}
