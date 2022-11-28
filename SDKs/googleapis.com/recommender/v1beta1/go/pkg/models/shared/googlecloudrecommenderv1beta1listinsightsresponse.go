package shared

// GoogleCloudRecommenderV1beta1ListInsightsResponse
// Response to the `ListInsights` method.
type GoogleCloudRecommenderV1beta1ListInsightsResponse struct {
	Insights      []GoogleCloudRecommenderV1beta1Insight `json:"insights,omitempty"`
	NextPageToken *string                                `json:"nextPageToken,omitempty"`
}
