package shared

type PrimaryInstanceSettings struct {
	DatabaseFlags map[string]string `json:"databaseFlags"`
	ID            *string           `json:"id"`
	Labels        map[string]string `json:"labels"`
	MachineConfig *MachineConfig    `json:"machineConfig"`
	PrivateIP     *string           `json:"privateIp"`
}
