package shared



type FormatMessage struct {
    Format *string `json:"format,omitempty"`
    Parameters []string `json:"parameters,omitempty"`
    
}

