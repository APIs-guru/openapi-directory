package shared

type InstanceConfig struct {
	EnableHealthMonitoring  *bool   `json:"enableHealthMonitoring"`
	NotebookUpgradeSchedule *string `json:"notebookUpgradeSchedule"`
}
