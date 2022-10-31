package shared



type ListFindingsResponse struct {
    Findings []Finding `json:"findings,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

