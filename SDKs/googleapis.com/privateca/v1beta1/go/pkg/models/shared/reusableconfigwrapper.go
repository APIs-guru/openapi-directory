package shared



type ReusableConfigWrapper struct {
    ReusableConfig *string `json:"reusableConfig,omitempty"`
    ReusableConfigValues *ReusableConfigValues `json:"reusableConfigValues,omitempty"`
    
}

