package shared

type SecondaryIPRangeSpec struct {
	IPPrefixLength                 *int32  `json:"ipPrefixLength,omitempty"`
	OutsideAllocationPublicIPRange *string `json:"outsideAllocationPublicIpRange,omitempty"`
	RangeName                      *string `json:"rangeName,omitempty"`
	RequestedAddress               *string `json:"requestedAddress,omitempty"`
}
