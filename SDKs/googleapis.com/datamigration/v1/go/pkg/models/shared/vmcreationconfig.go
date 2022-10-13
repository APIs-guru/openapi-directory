package shared

type VMCreationConfig struct {
	Subnet        *string `json:"subnet"`
	VMMachineType *string `json:"vmMachineType"`
	VMZone        *string `json:"vmZone"`
}
