package shared

type UpdateProjectConfigRequest struct {
	ProjectConfig *ProjectConfig `json:"projectConfig"`
	UpdateMask    *string        `json:"updateMask"`
}
