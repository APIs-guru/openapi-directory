package shared



type SearchAllResourcesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Results []StandardResourceMetadata `json:"results,omitempty"`
    
}

