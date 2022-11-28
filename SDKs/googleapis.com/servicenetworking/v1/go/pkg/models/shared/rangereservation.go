package shared

// RangeReservation
// Represents a range reservation.
type RangeReservation struct {
	IPPrefixLength                *int32       `json:"ipPrefixLength,omitempty"`
	RequestedRanges               []string     `json:"requestedRanges,omitempty"`
	SecondaryRangeIPPrefixLengths []int32      `json:"secondaryRangeIpPrefixLengths,omitempty"`
	SubnetworkCandidates          []Subnetwork `json:"subnetworkCandidates,omitempty"`
}
