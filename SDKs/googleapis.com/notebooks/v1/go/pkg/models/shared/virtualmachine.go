package shared

type VirtualMachine struct {
	InstanceID           *string               `json:"instanceId,omitempty"`
	InstanceName         *string               `json:"instanceName,omitempty"`
	VirtualMachineConfig *VirtualMachineConfig `json:"virtualMachineConfig,omitempty"`
}
