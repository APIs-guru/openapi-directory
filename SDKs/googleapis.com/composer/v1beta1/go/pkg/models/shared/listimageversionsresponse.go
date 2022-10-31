package shared



type ListImageVersionsResponse struct {
    ImageVersions []ImageVersion `json:"imageVersions,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

