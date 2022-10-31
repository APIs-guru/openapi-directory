package shared



type AddSubnetworkRequest struct {
    CheckServiceNetworkingUsePermission *bool `json:"checkServiceNetworkingUsePermission,omitempty"`
    ComputeIdempotencyWindow *string `json:"computeIdempotencyWindow,omitempty"`
    Consumer *string `json:"consumer,omitempty"`
    ConsumerNetwork *string `json:"consumerNetwork,omitempty"`
    Description *string `json:"description,omitempty"`
    IPPrefixLength *int32 `json:"ipPrefixLength,omitempty"`
    OutsideAllocationPublicIPRange *string `json:"outsideAllocationPublicIpRange,omitempty"`
    PrivateIpv6GoogleAccess *string `json:"privateIpv6GoogleAccess,omitempty"`
    Purpose *string `json:"purpose,omitempty"`
    Region *string `json:"region,omitempty"`
    RequestedAddress *string `json:"requestedAddress,omitempty"`
    RequestedRanges []string `json:"requestedRanges,omitempty"`
    SecondaryIPRangeSpecs []SecondaryIPRangeSpec `json:"secondaryIpRangeSpecs,omitempty"`
    Subnetwork *string `json:"subnetwork,omitempty"`
    SubnetworkUsers []string `json:"subnetworkUsers,omitempty"`
    UseCustomComputeIdempotencyWindow *bool `json:"useCustomComputeIdempotencyWindow,omitempty"`
    
}

