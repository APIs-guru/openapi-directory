package shared

type GoogleCloudDialogflowCxV3DeploymentStateEnum string

const (
	GoogleCloudDialogflowCxV3DeploymentStateEnumStateUnspecified GoogleCloudDialogflowCxV3DeploymentStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3DeploymentStateEnumRunning          GoogleCloudDialogflowCxV3DeploymentStateEnum = "RUNNING"
	GoogleCloudDialogflowCxV3DeploymentStateEnumSucceeded        GoogleCloudDialogflowCxV3DeploymentStateEnum = "SUCCEEDED"
	GoogleCloudDialogflowCxV3DeploymentStateEnumFailed           GoogleCloudDialogflowCxV3DeploymentStateEnum = "FAILED"
)

type GoogleCloudDialogflowCxV3Deployment struct {
	EndTime     *string                                       `json:"endTime"`
	FlowVersion *string                                       `json:"flowVersion"`
	Name        *string                                       `json:"name"`
	Result      *GoogleCloudDialogflowCxV3DeploymentResult    `json:"result"`
	StartTime   *string                                       `json:"startTime"`
	State       *GoogleCloudDialogflowCxV3DeploymentStateEnum `json:"state"`
}
