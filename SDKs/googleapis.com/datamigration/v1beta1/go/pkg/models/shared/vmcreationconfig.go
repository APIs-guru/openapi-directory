package shared

// VMCreationConfig
// VM creation configuration message
type VMCreationConfig struct {
	Subnet        *string `json:"subnet,omitempty"`
	VMMachineType *string `json:"vmMachineType,omitempty"`
	VMZone        *string `json:"vmZone,omitempty"`
}
