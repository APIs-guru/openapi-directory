package shared



type ListDashboardsResponse struct {
    Dashboards []Dashboard `json:"dashboards,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

