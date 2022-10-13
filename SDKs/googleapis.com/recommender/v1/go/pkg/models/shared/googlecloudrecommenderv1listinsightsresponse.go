package shared

type GoogleCloudRecommenderV1ListInsightsResponse struct {
	Insights      []GoogleCloudRecommenderV1Insight `json:"insights"`
	NextPageToken *string                           `json:"nextPageToken"`
}
