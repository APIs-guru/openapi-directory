package shared

type Deployment struct {
	DeploymentConfig *DeploymentConfig `json:"deploymentConfig,omitempty"`
	DeploymentID     *string           `json:"deploymentId,omitempty"`
	EntryPoints      []EntryPoint      `json:"entryPoints,omitempty"`
	UpdateTime       *string           `json:"updateTime,omitempty"`
}
