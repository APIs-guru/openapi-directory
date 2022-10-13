package shared

type RouterApplianceInstance struct {
	IPAddress        *string `json:"ipAddress"`
	NetworkInterface *string `json:"networkInterface"`
	VirtualMachine   *string `json:"virtualMachine"`
}
