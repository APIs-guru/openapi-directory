package shared

type UsableSubnetworkSecondaryRangeStatusEnum string

const (
	UsableSubnetworkSecondaryRangeStatusEnumUnknown           UsableSubnetworkSecondaryRangeStatusEnum = "UNKNOWN"
	UsableSubnetworkSecondaryRangeStatusEnumUnused            UsableSubnetworkSecondaryRangeStatusEnum = "UNUSED"
	UsableSubnetworkSecondaryRangeStatusEnumInUseService      UsableSubnetworkSecondaryRangeStatusEnum = "IN_USE_SERVICE"
	UsableSubnetworkSecondaryRangeStatusEnumInUseShareablePod UsableSubnetworkSecondaryRangeStatusEnum = "IN_USE_SHAREABLE_POD"
	UsableSubnetworkSecondaryRangeStatusEnumInUseManagedPod   UsableSubnetworkSecondaryRangeStatusEnum = "IN_USE_MANAGED_POD"
)

type UsableSubnetworkSecondaryRange struct {
	IPCidrRange *string                                   `json:"ipCidrRange,omitempty"`
	RangeName   *string                                   `json:"rangeName,omitempty"`
	Status      *UsableSubnetworkSecondaryRangeStatusEnum `json:"status,omitempty"`
}
