package shared

type RangeReservation struct {
	IPPrefixLength                *int32       `json:"ipPrefixLength"`
	RequestedRanges               []string     `json:"requestedRanges"`
	SecondaryRangeIPPrefixLengths []int32      `json:"secondaryRangeIpPrefixLengths"`
	SubnetworkCandidates          []Subnetwork `json:"subnetworkCandidates"`
}
