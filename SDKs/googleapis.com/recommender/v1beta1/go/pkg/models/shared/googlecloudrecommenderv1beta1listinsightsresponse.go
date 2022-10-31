package shared



type GoogleCloudRecommenderV1beta1ListInsightsResponse struct {
    Insights []GoogleCloudRecommenderV1beta1Insight `json:"insights,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

