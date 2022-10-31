package shared



type LocalizedString struct {
    Args map[string]string `json:"args,omitempty"`
    Message *string `json:"message,omitempty"`
    Token *string `json:"token,omitempty"`
    
}

