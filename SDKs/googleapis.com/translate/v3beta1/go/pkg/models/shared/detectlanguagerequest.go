package shared



type DetectLanguageRequest struct {
    Content *string `json:"content,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    MimeType *string `json:"mimeType,omitempty"`
    Model *string `json:"model,omitempty"`
    
}

