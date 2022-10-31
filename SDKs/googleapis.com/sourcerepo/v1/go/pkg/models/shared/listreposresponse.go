package shared



type ListReposResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Repos []Repo `json:"repos,omitempty"`
    
}

