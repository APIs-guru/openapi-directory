package shared



type AddTenantProjectRequest struct {
    ProjectConfig *TenantProjectConfig `json:"projectConfig,omitempty"`
    Tag *string `json:"tag,omitempty"`
    
}

