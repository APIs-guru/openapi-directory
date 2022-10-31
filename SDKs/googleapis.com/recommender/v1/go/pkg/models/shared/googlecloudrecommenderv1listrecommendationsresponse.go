package shared



type GoogleCloudRecommenderV1ListRecommendationsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Recommendations []GoogleCloudRecommenderV1Recommendation `json:"recommendations,omitempty"`
    
}

