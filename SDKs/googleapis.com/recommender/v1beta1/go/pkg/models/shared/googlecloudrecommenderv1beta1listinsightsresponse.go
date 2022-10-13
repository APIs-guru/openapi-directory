package shared

type GoogleCloudRecommenderV1beta1ListInsightsResponse struct {
	Insights      []GoogleCloudRecommenderV1beta1Insight `json:"insights"`
	NextPageToken *string                                `json:"nextPageToken"`
}
