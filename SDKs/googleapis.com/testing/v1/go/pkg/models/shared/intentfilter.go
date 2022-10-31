package shared



type IntentFilter struct {
    ActionNames []string `json:"actionNames,omitempty"`
    CategoryNames []string `json:"categoryNames,omitempty"`
    MimeType *string `json:"mimeType,omitempty"`
    
}

