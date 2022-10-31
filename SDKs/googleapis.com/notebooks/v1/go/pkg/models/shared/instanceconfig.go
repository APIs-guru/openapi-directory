package shared



type InstanceConfig struct {
    EnableHealthMonitoring *bool `json:"enableHealthMonitoring,omitempty"`
    NotebookUpgradeSchedule *string `json:"notebookUpgradeSchedule,omitempty"`
    
}

