package shared

type RouterApplianceInstance struct {
	IPAddress        *string `json:"ipAddress,omitempty"`
	NetworkInterface *string `json:"networkInterface,omitempty"`
	VirtualMachine   *string `json:"virtualMachine,omitempty"`
}
