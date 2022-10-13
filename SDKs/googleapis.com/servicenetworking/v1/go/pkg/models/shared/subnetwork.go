package shared

type Subnetwork struct {
	IPCidrRange       *string            `json:"ipCidrRange"`
	Name              *string            `json:"name"`
	Network           *string            `json:"network"`
	OutsideAllocation *bool              `json:"outsideAllocation"`
	Region            *string            `json:"region"`
	SecondaryIPRanges []SecondaryIPRange `json:"secondaryIpRanges"`
}
