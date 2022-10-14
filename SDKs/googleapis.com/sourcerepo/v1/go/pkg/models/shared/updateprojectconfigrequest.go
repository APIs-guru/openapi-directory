package shared

type UpdateProjectConfigRequest struct {
	ProjectConfig *ProjectConfig `json:"projectConfig,omitempty"`
	UpdateMask    *string        `json:"updateMask,omitempty"`
}
