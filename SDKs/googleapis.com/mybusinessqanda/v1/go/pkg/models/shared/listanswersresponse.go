package shared



type ListAnswersResponse struct {
    Answers []Answer `json:"answers,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    TotalSize *int32 `json:"totalSize,omitempty"`
    
}

