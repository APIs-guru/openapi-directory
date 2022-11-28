package shared

// GoogleCloudDialogflowCxV3beta1DeploymentResult
// Result of the deployment.
type GoogleCloudDialogflowCxV3beta1DeploymentResult struct {
	DeploymentTestResults []string `json:"deploymentTestResults,omitempty"`
	Experiment            *string  `json:"experiment,omitempty"`
}
