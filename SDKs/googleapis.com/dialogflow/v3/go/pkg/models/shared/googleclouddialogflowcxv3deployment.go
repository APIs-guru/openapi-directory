package shared

type GoogleCloudDialogflowCxV3DeploymentStateEnum string

const (
	GoogleCloudDialogflowCxV3DeploymentStateEnumStateUnspecified GoogleCloudDialogflowCxV3DeploymentStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3DeploymentStateEnumRunning          GoogleCloudDialogflowCxV3DeploymentStateEnum = "RUNNING"
	GoogleCloudDialogflowCxV3DeploymentStateEnumSucceeded        GoogleCloudDialogflowCxV3DeploymentStateEnum = "SUCCEEDED"
	GoogleCloudDialogflowCxV3DeploymentStateEnumFailed           GoogleCloudDialogflowCxV3DeploymentStateEnum = "FAILED"
)

// GoogleCloudDialogflowCxV3Deployment
// Represents an deployment in an environment. A deployment happens when a flow version configured to be active in the environment. You can configure running pre-deployment steps, e.g. running validation test cases, experiment auto-rollout, etc.
type GoogleCloudDialogflowCxV3Deployment struct {
	EndTime     *string                                       `json:"endTime,omitempty"`
	FlowVersion *string                                       `json:"flowVersion,omitempty"`
	Name        *string                                       `json:"name,omitempty"`
	Result      *GoogleCloudDialogflowCxV3DeploymentResult    `json:"result,omitempty"`
	StartTime   *string                                       `json:"startTime,omitempty"`
	State       *GoogleCloudDialogflowCxV3DeploymentStateEnum `json:"state,omitempty"`
}
