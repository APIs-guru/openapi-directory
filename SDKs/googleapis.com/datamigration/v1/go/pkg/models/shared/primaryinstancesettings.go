package shared

// PrimaryInstanceSettingsInput
// Settings for the cluster's primary instance
type PrimaryInstanceSettingsInput struct {
	DatabaseFlags map[string]string `json:"databaseFlags,omitempty"`
	ID            *string           `json:"id,omitempty"`
	Labels        map[string]string `json:"labels,omitempty"`
	MachineConfig *MachineConfig    `json:"machineConfig,omitempty"`
}

// PrimaryInstanceSettings
// Settings for the cluster's primary instance
type PrimaryInstanceSettings struct {
	DatabaseFlags map[string]string `json:"databaseFlags,omitempty"`
	ID            *string           `json:"id,omitempty"`
	Labels        map[string]string `json:"labels,omitempty"`
	MachineConfig *MachineConfig    `json:"machineConfig,omitempty"`
	PrivateIP     *string           `json:"privateIp,omitempty"`
}
