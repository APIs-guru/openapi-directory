package shared



type ListIosAppsResponse struct {
    Apps []IosApp `json:"apps,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

