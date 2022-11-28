package shared

// GoogleCloudRecommenderV1beta1ListRecommendationsResponse
// Response to the `ListRecommendations` method.
type GoogleCloudRecommenderV1beta1ListRecommendationsResponse struct {
	NextPageToken   *string                                       `json:"nextPageToken,omitempty"`
	Recommendations []GoogleCloudRecommenderV1beta1Recommendation `json:"recommendations,omitempty"`
}
