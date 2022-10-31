package shared

type UsableSubnetwork struct {
	IPCidrRange       *string                          `json:"ipCidrRange,omitempty"`
	Network           *string                          `json:"network,omitempty"`
	SecondaryIPRanges []UsableSubnetworkSecondaryRange `json:"secondaryIpRanges,omitempty"`
	StatusMessage     *string                          `json:"statusMessage,omitempty"`
	Subnetwork        *string                          `json:"subnetwork,omitempty"`
}
