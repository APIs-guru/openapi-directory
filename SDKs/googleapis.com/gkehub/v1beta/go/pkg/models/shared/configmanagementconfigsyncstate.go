package shared

type ConfigManagementConfigSyncState struct {
	DeploymentState *ConfigManagementConfigSyncDeploymentState `json:"deploymentState"`
	SyncState       *ConfigManagementSyncState                 `json:"syncState"`
	Version         *ConfigManagementConfigSyncVersion         `json:"version"`
}
