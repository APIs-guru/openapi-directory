package shared



type AndroidMatrix struct {
    AndroidModelIds []string `json:"androidModelIds,omitempty"`
    AndroidVersionIds []string `json:"androidVersionIds,omitempty"`
    Locales []string `json:"locales,omitempty"`
    Orientations []string `json:"orientations,omitempty"`
    
}

