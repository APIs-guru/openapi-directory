package shared

// ApplyTenantProjectConfigRequest
// Request to apply configuration to an existing tenant project.
type ApplyTenantProjectConfigRequest struct {
	ProjectConfig *TenantProjectConfig `json:"projectConfig,omitempty"`
	Tag           *string              `json:"tag,omitempty"`
}
