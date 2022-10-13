package shared

type AddTenantProjectRequest struct {
	ProjectConfig *TenantProjectConfig `json:"projectConfig"`
	Tag           *string              `json:"tag"`
}
