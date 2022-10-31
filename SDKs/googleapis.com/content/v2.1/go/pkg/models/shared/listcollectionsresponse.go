package shared



type ListCollectionsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Resources []Collection `json:"resources,omitempty"`
    
}

