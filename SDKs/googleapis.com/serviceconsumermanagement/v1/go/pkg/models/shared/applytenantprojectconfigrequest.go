package shared



type ApplyTenantProjectConfigRequest struct {
    ProjectConfig *TenantProjectConfig `json:"projectConfig,omitempty"`
    Tag *string `json:"tag,omitempty"`
    
}

