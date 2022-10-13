package shared

type Resources struct {
	Regions        []string        `json:"regions"`
	VirtualMachine *VirtualMachine `json:"virtualMachine"`
	Zones          []string        `json:"zones"`
}
