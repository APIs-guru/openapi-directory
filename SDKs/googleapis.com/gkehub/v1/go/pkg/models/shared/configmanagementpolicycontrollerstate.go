package shared



type ConfigManagementPolicyControllerState struct {
    DeploymentState *ConfigManagementGatekeeperDeploymentState `json:"deploymentState,omitempty"`
    Version *ConfigManagementPolicyControllerVersion `json:"version,omitempty"`
    
}

