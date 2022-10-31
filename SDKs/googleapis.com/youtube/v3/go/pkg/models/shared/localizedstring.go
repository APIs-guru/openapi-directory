package shared



type LocalizedString struct {
    Language *string `json:"language,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

