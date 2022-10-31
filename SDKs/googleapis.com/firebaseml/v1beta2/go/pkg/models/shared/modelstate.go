package shared



type ModelState struct {
    Published *bool `json:"published,omitempty"`
    ValidationError *Status `json:"validationError,omitempty"`
    
}

