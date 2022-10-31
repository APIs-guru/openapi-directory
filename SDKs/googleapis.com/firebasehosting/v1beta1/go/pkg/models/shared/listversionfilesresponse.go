package shared



type ListVersionFilesResponse struct {
    Files []VersionFile `json:"files,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

