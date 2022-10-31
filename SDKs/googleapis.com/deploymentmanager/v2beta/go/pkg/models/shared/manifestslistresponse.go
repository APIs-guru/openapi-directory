package shared



type ManifestsListResponse struct {
    Manifests []Manifest `json:"manifests,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

