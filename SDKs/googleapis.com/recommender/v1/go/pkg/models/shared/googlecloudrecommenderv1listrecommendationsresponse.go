package shared

type GoogleCloudRecommenderV1ListRecommendationsResponse struct {
	NextPageToken   *string                                  `json:"nextPageToken"`
	Recommendations []GoogleCloudRecommenderV1Recommendation `json:"recommendations"`
}
