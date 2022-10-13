package shared

type ConfigManagementOperatorStateDeploymentStateEnum string

const (
	ConfigManagementOperatorStateDeploymentStateEnumDeploymentStateUnspecified ConfigManagementOperatorStateDeploymentStateEnum = "DEPLOYMENT_STATE_UNSPECIFIED"
	ConfigManagementOperatorStateDeploymentStateEnumNotInstalled               ConfigManagementOperatorStateDeploymentStateEnum = "NOT_INSTALLED"
	ConfigManagementOperatorStateDeploymentStateEnumInstalled                  ConfigManagementOperatorStateDeploymentStateEnum = "INSTALLED"
	ConfigManagementOperatorStateDeploymentStateEnumError                      ConfigManagementOperatorStateDeploymentStateEnum = "ERROR"
)

type ConfigManagementOperatorState struct {
	DeploymentState *ConfigManagementOperatorStateDeploymentStateEnum `json:"deploymentState"`
	Errors          []ConfigManagementInstallError                    `json:"errors"`
	Version         *string                                           `json:"version"`
}
