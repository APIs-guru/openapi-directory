package shared

// Deployment
// Representation of a single script deployment.
type Deployment struct {
	DeploymentConfig *DeploymentConfig `json:"deploymentConfig,omitempty"`
	DeploymentID     *string           `json:"deploymentId,omitempty"`
	EntryPoints      []EntryPoint      `json:"entryPoints,omitempty"`
	UpdateTime       *string           `json:"updateTime,omitempty"`
}
