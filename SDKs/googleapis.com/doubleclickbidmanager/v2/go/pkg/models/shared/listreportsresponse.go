package shared



type ListReportsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Reports []Report `json:"reports,omitempty"`
    
}

