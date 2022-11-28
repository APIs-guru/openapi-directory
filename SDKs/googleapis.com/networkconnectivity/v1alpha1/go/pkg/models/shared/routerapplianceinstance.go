package shared

// RouterApplianceInstance
// RouterAppliance represents a Router appliance which is specified by a VM URI and a NIC address.
type RouterApplianceInstance struct {
	IPAddress        *string `json:"ipAddress,omitempty"`
	NetworkInterface *string `json:"networkInterface,omitempty"`
	VirtualMachine   *string `json:"virtualMachine,omitempty"`
}
