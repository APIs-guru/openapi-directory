package shared

// UpdateProjectConfigRequest
// Request for UpdateProjectConfig.
type UpdateProjectConfigRequest struct {
	ProjectConfig *ProjectConfig `json:"projectConfig,omitempty"`
	UpdateMask    *string        `json:"updateMask,omitempty"`
}
