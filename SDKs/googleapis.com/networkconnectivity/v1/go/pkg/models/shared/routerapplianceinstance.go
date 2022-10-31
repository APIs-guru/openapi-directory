package shared

type RouterApplianceInstance struct {
	IPAddress      *string `json:"ipAddress,omitempty"`
	VirtualMachine *string `json:"virtualMachine,omitempty"`
}
