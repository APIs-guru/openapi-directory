package shared

// VMParams
// Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource.
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
