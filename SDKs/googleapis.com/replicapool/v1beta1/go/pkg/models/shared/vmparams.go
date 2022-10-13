package shared

type VMParams struct {
	BaseInstanceName  *string            `json:"baseInstanceName"`
	CanIPForward      *bool              `json:"canIpForward"`
	Description       *string            `json:"description"`
	DisksToAttach     []ExistingDisk     `json:"disksToAttach"`
	DisksToCreate     []NewDisk          `json:"disksToCreate"`
	MachineType       *string            `json:"machineType"`
	Metadata          *Metadata          `json:"metadata"`
	NetworkInterfaces []NetworkInterface `json:"networkInterfaces"`
	OnHostMaintenance *string            `json:"onHostMaintenance"`
	ServiceAccounts   []ServiceAccount   `json:"serviceAccounts"`
	Tags              *Tag               `json:"tags"`
}
