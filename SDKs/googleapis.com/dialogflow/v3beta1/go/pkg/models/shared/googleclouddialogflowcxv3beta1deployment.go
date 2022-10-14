package shared

type GoogleCloudDialogflowCxV3beta1DeploymentStateEnum string

const (
	GoogleCloudDialogflowCxV3beta1DeploymentStateEnumStateUnspecified GoogleCloudDialogflowCxV3beta1DeploymentStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1DeploymentStateEnumRunning          GoogleCloudDialogflowCxV3beta1DeploymentStateEnum = "RUNNING"
	GoogleCloudDialogflowCxV3beta1DeploymentStateEnumSucceeded        GoogleCloudDialogflowCxV3beta1DeploymentStateEnum = "SUCCEEDED"
	GoogleCloudDialogflowCxV3beta1DeploymentStateEnumFailed           GoogleCloudDialogflowCxV3beta1DeploymentStateEnum = "FAILED"
)

type GoogleCloudDialogflowCxV3beta1Deployment struct {
	EndTime     *string                                            `json:"endTime,omitempty"`
	FlowVersion *string                                            `json:"flowVersion,omitempty"`
	Name        *string                                            `json:"name,omitempty"`
	Result      *GoogleCloudDialogflowCxV3beta1DeploymentResult    `json:"result,omitempty"`
	StartTime   *string                                            `json:"startTime,omitempty"`
	State       *GoogleCloudDialogflowCxV3beta1DeploymentStateEnum `json:"state,omitempty"`
}
