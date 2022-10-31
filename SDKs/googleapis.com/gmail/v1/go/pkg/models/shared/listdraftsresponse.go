package shared



type ListDraftsResponse struct {
    Drafts []Draft `json:"drafts,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    ResultSizeEstimate *int64 `json:"resultSizeEstimate,omitempty"`
    
}

