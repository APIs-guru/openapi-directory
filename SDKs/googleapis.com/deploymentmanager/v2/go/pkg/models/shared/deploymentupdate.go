package shared

type DeploymentUpdate struct {
	Description *string                      `json:"description"`
	Labels      []DeploymentUpdateLabelEntry `json:"labels"`
	Manifest    *string                      `json:"manifest"`
}
