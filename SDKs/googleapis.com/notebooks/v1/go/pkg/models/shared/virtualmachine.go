package shared

type VirtualMachine struct {
	InstanceID           *string               `json:"instanceId"`
	InstanceName         *string               `json:"instanceName"`
	VirtualMachineConfig *VirtualMachineConfig `json:"virtualMachineConfig"`
}
