package shared



type ListCasesResponse struct {
    Cases []Case `json:"cases,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

