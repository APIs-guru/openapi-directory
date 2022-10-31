package shared



type ListEnvironmentsResponse struct {
    Environments []Environment `json:"environments,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

