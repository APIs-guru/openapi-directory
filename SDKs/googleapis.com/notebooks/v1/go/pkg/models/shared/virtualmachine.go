package shared

// VirtualMachine
// Runtime using Virtual Machine for computing.
type VirtualMachine struct {
	InstanceID           *string               `json:"instanceId,omitempty"`
	InstanceName         *string               `json:"instanceName,omitempty"`
	VirtualMachineConfig *VirtualMachineConfig `json:"virtualMachineConfig,omitempty"`
}

// VirtualMachineInput
// Runtime using Virtual Machine for computing.
type VirtualMachineInput struct {
	VirtualMachineConfig *VirtualMachineConfigInput `json:"virtualMachineConfig,omitempty"`
}
