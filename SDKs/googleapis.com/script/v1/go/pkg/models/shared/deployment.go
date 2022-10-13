package shared

type Deployment struct {
	DeploymentConfig *DeploymentConfig `json:"deploymentConfig"`
	DeploymentID     *string           `json:"deploymentId"`
	EntryPoints      []EntryPoint      `json:"entryPoints"`
	UpdateTime       *string           `json:"updateTime"`
}
