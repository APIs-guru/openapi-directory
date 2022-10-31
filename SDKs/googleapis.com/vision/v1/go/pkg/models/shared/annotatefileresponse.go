package shared



type AnnotateFileResponse struct {
    Error *Status `json:"error,omitempty"`
    InputConfig *InputConfig `json:"inputConfig,omitempty"`
    Responses []AnnotateImageResponse `json:"responses,omitempty"`
    TotalPages *int32 `json:"totalPages,omitempty"`
    
}

