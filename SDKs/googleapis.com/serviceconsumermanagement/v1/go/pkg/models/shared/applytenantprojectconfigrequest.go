package shared

type ApplyTenantProjectConfigRequest struct {
	ProjectConfig *TenantProjectConfig `json:"projectConfig"`
	Tag           *string              `json:"tag"`
}
