package shared



type SearchAllResourcesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Results []ResourceSearchResult `json:"results,omitempty"`
    
}

