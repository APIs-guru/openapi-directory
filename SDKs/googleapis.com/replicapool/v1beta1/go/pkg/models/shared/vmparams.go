package shared

type VMParams struct {
	BaseInstanceName  *string            `json:"baseInstanceName,omitempty"`
	CanIPForward      *bool              `json:"canIpForward,omitempty"`
	Description       *string            `json:"description,omitempty"`
	DisksToAttach     []ExistingDisk     `json:"disksToAttach,omitempty"`
	DisksToCreate     []NewDisk          `json:"disksToCreate,omitempty"`
	MachineType       *string            `json:"machineType,omitempty"`
	Metadata          *Metadata          `json:"metadata,omitempty"`
	NetworkInterfaces []NetworkInterface `json:"networkInterfaces,omitempty"`
	OnHostMaintenance *string            `json:"onHostMaintenance,omitempty"`
	ServiceAccounts   []ServiceAccount   `json:"serviceAccounts,omitempty"`
	Tags              *Tag               `json:"tags,omitempty"`
}
