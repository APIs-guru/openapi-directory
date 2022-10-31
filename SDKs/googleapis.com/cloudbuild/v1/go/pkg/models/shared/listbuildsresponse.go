package shared



type ListBuildsResponse struct {
    Builds []Build `json:"builds,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

