package shared



type ListDeploymentsResponse struct {
    Deployments []Deployment `json:"deployments,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

