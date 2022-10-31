package shared



type Secrets struct {
    Inline []InlineSecret `json:"inline,omitempty"`
    SecretManager []SecretManagerSecret `json:"secretManager,omitempty"`
    
}

