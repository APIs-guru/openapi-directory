package shared

// UsableSubnetwork
// UsableSubnetwork resource returns the subnetwork name, its associated network and the primary CIDR range.
type UsableSubnetwork struct {
	IPCidrRange       *string                          `json:"ipCidrRange,omitempty"`
	Network           *string                          `json:"network,omitempty"`
	SecondaryIPRanges []UsableSubnetworkSecondaryRange `json:"secondaryIpRanges,omitempty"`
	StatusMessage     *string                          `json:"statusMessage,omitempty"`
	Subnetwork        *string                          `json:"subnetwork,omitempty"`
}
