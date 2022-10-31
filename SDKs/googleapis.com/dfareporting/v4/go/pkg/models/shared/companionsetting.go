package shared



type CompanionSetting struct {
    CompanionsDisabled *bool `json:"companionsDisabled,omitempty"`
    EnabledSizes []Size `json:"enabledSizes,omitempty"`
    ImageOnly *bool `json:"imageOnly,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

