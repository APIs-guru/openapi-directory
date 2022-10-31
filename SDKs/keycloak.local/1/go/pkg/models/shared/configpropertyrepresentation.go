package shared



type ConfigPropertyRepresentation struct {
    DefaultValue map[string]interface{} `json:"defaultValue,omitempty"`
    HelpText *string `json:"helpText,omitempty"`
    Label *string `json:"label,omitempty"`
    Name *string `json:"name,omitempty"`
    Options []string `json:"options,omitempty"`
    Secret *bool `json:"secret,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

