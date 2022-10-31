package shared



type ConfigManagementConfigSync struct {
    AllowVerticalScale *bool `json:"allowVerticalScale,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    Git *ConfigManagementGitConfig `json:"git,omitempty"`
    Oci *ConfigManagementOciConfig `json:"oci,omitempty"`
    PreventDrift *bool `json:"preventDrift,omitempty"`
    SourceFormat *string `json:"sourceFormat,omitempty"`
    
}

