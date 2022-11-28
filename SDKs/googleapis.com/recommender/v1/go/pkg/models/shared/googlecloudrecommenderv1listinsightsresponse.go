package shared

// GoogleCloudRecommenderV1ListInsightsResponse
// Response to the `ListInsights` method.
type GoogleCloudRecommenderV1ListInsightsResponse struct {
	Insights      []GoogleCloudRecommenderV1Insight `json:"insights,omitempty"`
	NextPageToken *string                           `json:"nextPageToken,omitempty"`
}
