package shared

type UsableSubnetwork struct {
	IPCidrRange       *string                          `json:"ipCidrRange"`
	Network           *string                          `json:"network"`
	SecondaryIPRanges []UsableSubnetworkSecondaryRange `json:"secondaryIpRanges"`
	StatusMessage     *string                          `json:"statusMessage"`
	Subnetwork        *string                          `json:"subnetwork"`
}
