package shared

// GoogleCloudDialogflowCxV3DeploymentResult
// Result of the deployment.
type GoogleCloudDialogflowCxV3DeploymentResult struct {
	DeploymentTestResults []string `json:"deploymentTestResults,omitempty"`
	Experiment            *string  `json:"experiment,omitempty"`
}
