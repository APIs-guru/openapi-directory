package shared



type GoogleCloudRecommenderV1ListInsightsResponse struct {
    Insights []GoogleCloudRecommenderV1Insight `json:"insights,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

