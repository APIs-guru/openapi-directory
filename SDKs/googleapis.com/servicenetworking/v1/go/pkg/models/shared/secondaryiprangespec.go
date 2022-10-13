package shared

type SecondaryIPRangeSpec struct {
	IPPrefixLength                 *int32  `json:"ipPrefixLength"`
	OutsideAllocationPublicIPRange *string `json:"outsideAllocationPublicIpRange"`
	RangeName                      *string `json:"rangeName"`
	RequestedAddress               *string `json:"requestedAddress"`
}
