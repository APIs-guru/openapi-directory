package shared

// InstanceConfig
// Notebook instance configurations that can be updated.
type InstanceConfig struct {
	EnableHealthMonitoring  *bool   `json:"enableHealthMonitoring,omitempty"`
	NotebookUpgradeSchedule *string `json:"notebookUpgradeSchedule,omitempty"`
}
