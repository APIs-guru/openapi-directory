package shared

// UpdateDeploymentRequest
// Request with deployment information to update an existing deployment.
type UpdateDeploymentRequest struct {
	DeploymentConfig *DeploymentConfig `json:"deploymentConfig,omitempty"`
}
