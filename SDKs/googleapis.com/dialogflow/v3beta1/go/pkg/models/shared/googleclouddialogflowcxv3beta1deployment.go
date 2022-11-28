package shared

type GoogleCloudDialogflowCxV3beta1DeploymentStateEnum string

const (
	GoogleCloudDialogflowCxV3beta1DeploymentStateEnumStateUnspecified GoogleCloudDialogflowCxV3beta1DeploymentStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1DeploymentStateEnumRunning          GoogleCloudDialogflowCxV3beta1DeploymentStateEnum = "RUNNING"
	GoogleCloudDialogflowCxV3beta1DeploymentStateEnumSucceeded        GoogleCloudDialogflowCxV3beta1DeploymentStateEnum = "SUCCEEDED"
	GoogleCloudDialogflowCxV3beta1DeploymentStateEnumFailed           GoogleCloudDialogflowCxV3beta1DeploymentStateEnum = "FAILED"
)

// GoogleCloudDialogflowCxV3beta1Deployment
// Represents an deployment in an environment. A deployment happens when a flow version configured to be active in the environment. You can configure running pre-deployment steps, e.g. running validation test cases, experiment auto-rollout, etc.
type GoogleCloudDialogflowCxV3beta1Deployment struct {
	EndTime     *string                                            `json:"endTime,omitempty"`
	FlowVersion *string                                            `json:"flowVersion,omitempty"`
	Name        *string                                            `json:"name,omitempty"`
	Result      *GoogleCloudDialogflowCxV3beta1DeploymentResult    `json:"result,omitempty"`
	StartTime   *string                                            `json:"startTime,omitempty"`
	State       *GoogleCloudDialogflowCxV3beta1DeploymentStateEnum `json:"state,omitempty"`
}
