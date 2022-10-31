package shared



type ListPlatformsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Platforms []Platform `json:"platforms,omitempty"`
    
}

