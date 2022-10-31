package shared



type EvaluateUserConsentsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Results []Result `json:"results,omitempty"`
    
}

