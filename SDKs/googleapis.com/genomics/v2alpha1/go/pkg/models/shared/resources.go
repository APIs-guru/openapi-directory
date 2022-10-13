package shared

type Resources struct {
	ProjectID      *string         `json:"projectId"`
	Regions        []string        `json:"regions"`
	VirtualMachine *VirtualMachine `json:"virtualMachine"`
	Zones          []string        `json:"zones"`
}
