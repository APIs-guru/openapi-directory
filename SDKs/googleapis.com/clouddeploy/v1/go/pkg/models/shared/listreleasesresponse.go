package shared



type ListReleasesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Releases []Release `json:"releases,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

