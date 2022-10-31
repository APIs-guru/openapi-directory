package shared

type VMCreationConfig struct {
	Subnet        *string `json:"subnet,omitempty"`
	VMMachineType *string `json:"vmMachineType,omitempty"`
	VMZone        *string `json:"vmZone,omitempty"`
}
