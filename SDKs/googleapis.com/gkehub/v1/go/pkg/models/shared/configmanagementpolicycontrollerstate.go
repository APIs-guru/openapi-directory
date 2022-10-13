package shared

type ConfigManagementPolicyControllerState struct {
	DeploymentState *ConfigManagementGatekeeperDeploymentState `json:"deploymentState"`
	Version         *ConfigManagementPolicyControllerVersion   `json:"version"`
}
