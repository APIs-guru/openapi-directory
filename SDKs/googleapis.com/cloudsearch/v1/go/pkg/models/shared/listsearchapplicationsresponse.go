package shared



type ListSearchApplicationsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    SearchApplications []SearchApplication `json:"searchApplications,omitempty"`
    
}

