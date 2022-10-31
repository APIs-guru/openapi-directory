package shared



type ListExportsResponse struct {
    Exports []Export `json:"exports,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

