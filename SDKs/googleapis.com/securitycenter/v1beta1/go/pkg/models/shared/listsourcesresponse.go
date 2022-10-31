package shared



type ListSourcesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Sources []Source `json:"sources,omitempty"`
    
}

