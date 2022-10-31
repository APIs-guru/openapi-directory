package shared



type ListRecommendedGoogleLocationsResponse struct {
    GoogleLocations []GoogleLocation `json:"googleLocations,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TotalSize *int32 `json:"totalSize,omitempty"`
    
}

