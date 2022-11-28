package shared

// RouterApplianceInstance
// A router appliance instance is a Compute Engine virtual machine (VM) instance that acts as a BGP speaker. A router appliance instance is specified by the URI of the VM and the internal IP address of one of the VM's network interfaces.
type RouterApplianceInstance struct {
	IPAddress      *string `json:"ipAddress,omitempty"`
	VirtualMachine *string `json:"virtualMachine,omitempty"`
}
