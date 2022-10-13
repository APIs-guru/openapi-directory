package shared

type DeploymentUpdate struct {
	Credential  *Credential                  `json:"credential"`
	Description *string                      `json:"description"`
	Labels      []DeploymentUpdateLabelEntry `json:"labels"`
	Manifest    *string                      `json:"manifest"`
}
