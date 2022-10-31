package shared



type ListQuestionsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Questions []Question `json:"questions,omitempty"`
    TotalSize *int32 `json:"totalSize,omitempty"`
    
}

