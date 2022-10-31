package shared



type AndroidDevice struct {
    AndroidModelID *string `json:"androidModelId,omitempty"`
    AndroidVersionID *string `json:"androidVersionId,omitempty"`
    Locale *string `json:"locale,omitempty"`
    Orientation *string `json:"orientation,omitempty"`
    
}

