package shared

// Subnetwork
// Represents a subnet that was created or discovered by a private access management service.
type Subnetwork struct {
	IPCidrRange       *string            `json:"ipCidrRange,omitempty"`
	Name              *string            `json:"name,omitempty"`
	Network           *string            `json:"network,omitempty"`
	OutsideAllocation *bool              `json:"outsideAllocation,omitempty"`
	Region            *string            `json:"region,omitempty"`
	SecondaryIPRanges []SecondaryIPRange `json:"secondaryIpRanges,omitempty"`
}
