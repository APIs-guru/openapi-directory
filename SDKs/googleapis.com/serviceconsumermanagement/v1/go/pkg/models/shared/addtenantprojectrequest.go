package shared

// AddTenantProjectRequest
// Request to add a newly created and configured tenant project to a tenancy unit.
type AddTenantProjectRequest struct {
	ProjectConfig *TenantProjectConfig `json:"projectConfig,omitempty"`
	Tag           *string              `json:"tag,omitempty"`
}
