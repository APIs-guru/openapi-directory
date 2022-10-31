package shared



type SearchCasesResponse struct {
    Cases []Case `json:"cases,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

