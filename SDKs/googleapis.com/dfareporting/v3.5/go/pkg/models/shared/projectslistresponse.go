package shared



type ProjectsListResponse struct {
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Projects []Project `json:"projects,omitempty"`
    
}

