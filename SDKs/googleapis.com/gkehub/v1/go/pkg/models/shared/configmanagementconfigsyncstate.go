package shared

// ConfigManagementConfigSyncState
// State information for ConfigSync
type ConfigManagementConfigSyncState struct {
	DeploymentState *ConfigManagementConfigSyncDeploymentState `json:"deploymentState,omitempty"`
	SyncState       *ConfigManagementSyncState                 `json:"syncState,omitempty"`
	Version         *ConfigManagementConfigSyncVersion         `json:"version,omitempty"`
}
