package shared



type ListProjectsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Projects []Project `json:"projects,omitempty"`
    
}

