package shared



type TranslateTextRequest struct {
    Format *string `json:"format,omitempty"`
    Model *string `json:"model,omitempty"`
    Q []string `json:"q,omitempty"`
    Source *string `json:"source,omitempty"`
    Target *string `json:"target,omitempty"`
    
}

