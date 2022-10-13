package shared

type AddSubnetworkRequest struct {
	CheckServiceNetworkingUsePermission *bool                  `json:"checkServiceNetworkingUsePermission"`
	ComputeIdempotencyWindow            *string                `json:"computeIdempotencyWindow"`
	Consumer                            *string                `json:"consumer"`
	ConsumerNetwork                     *string                `json:"consumerNetwork"`
	Description                         *string                `json:"description"`
	IPPrefixLength                      *int32                 `json:"ipPrefixLength"`
	OutsideAllocationPublicIPRange      *string                `json:"outsideAllocationPublicIpRange"`
	PrivateIpv6GoogleAccess             *string                `json:"privateIpv6GoogleAccess"`
	Purpose                             *string                `json:"purpose"`
	Region                              *string                `json:"region"`
	RequestedAddress                    *string                `json:"requestedAddress"`
	RequestedRanges                     []string               `json:"requestedRanges"`
	SecondaryIPRangeSpecs               []SecondaryIPRangeSpec `json:"secondaryIpRangeSpecs"`
	Subnetwork                          *string                `json:"subnetwork"`
	SubnetworkUsers                     []string               `json:"subnetworkUsers"`
	UseCustomComputeIdempotencyWindow   *bool                  `json:"useCustomComputeIdempotencyWindow"`
}
