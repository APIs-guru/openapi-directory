package shared

type DeploymentUpdate struct {
	Credential  *Credential                  `json:"credential,omitempty"`
	Description *string                      `json:"description,omitempty"`
	Labels      []DeploymentUpdateLabelEntry `json:"labels,omitempty"`
	Manifest    *string                      `json:"manifest,omitempty"`
}
