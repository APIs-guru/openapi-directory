package shared



type ListSitesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Sites []Site `json:"sites,omitempty"`
    
}

