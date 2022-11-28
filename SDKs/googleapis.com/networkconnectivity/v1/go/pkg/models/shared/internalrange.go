package shared

type InternalRangeOverlapsEnum string

const (
	InternalRangeOverlapsEnumOverlapUnspecified InternalRangeOverlapsEnum = "OVERLAP_UNSPECIFIED"
	InternalRangeOverlapsEnumOverlapRouteRange  InternalRangeOverlapsEnum = "OVERLAP_ROUTE_RANGE"
)

type InternalRangePeeringEnum string

const (
	InternalRangePeeringEnumPeeringUnspecified InternalRangePeeringEnum = "PEERING_UNSPECIFIED"
	InternalRangePeeringEnumForSelf            InternalRangePeeringEnum = "FOR_SELF"
	InternalRangePeeringEnumForPeer            InternalRangePeeringEnum = "FOR_PEER"
	InternalRangePeeringEnumNotShared          InternalRangePeeringEnum = "NOT_SHARED"
)

type InternalRangeUsageEnum string

const (
	InternalRangeUsageEnumUsageUnspecified InternalRangeUsageEnum = "USAGE_UNSPECIFIED"
	InternalRangeUsageEnumForVpc           InternalRangeUsageEnum = "FOR_VPC"
	InternalRangeUsageEnumExternalToVpc    InternalRangeUsageEnum = "EXTERNAL_TO_VPC"
)

// InternalRange
// The InternalRange resource for IPAM operations within a VPC network. Used to represent a private address range along with behavioral characterstics of that range (it's usage and peering behavior). Networking resources can link to this range if they are created as belonging to it. Next id: 14
type InternalRange struct {
	CreateTime      *string                     `json:"createTime,omitempty"`
	Description     *string                     `json:"description,omitempty"`
	IPCidrRange     *string                     `json:"ipCidrRange,omitempty"`
	Labels          map[string]string           `json:"labels,omitempty"`
	Name            *string                     `json:"name,omitempty"`
	Network         *string                     `json:"network,omitempty"`
	Overlaps        []InternalRangeOverlapsEnum `json:"overlaps,omitempty"`
	Peering         *InternalRangePeeringEnum   `json:"peering,omitempty"`
	PrefixLength    *int32                      `json:"prefixLength,omitempty"`
	TargetCidrRange []string                    `json:"targetCidrRange,omitempty"`
	UpdateTime      *string                     `json:"updateTime,omitempty"`
	Usage           *InternalRangeUsageEnum     `json:"usage,omitempty"`
	Users           []string                    `json:"users,omitempty"`
}

// InternalRangeInput
// The InternalRange resource for IPAM operations within a VPC network. Used to represent a private address range along with behavioral characterstics of that range (it's usage and peering behavior). Networking resources can link to this range if they are created as belonging to it. Next id: 14
type InternalRangeInput struct {
	CreateTime      *string                     `json:"createTime,omitempty"`
	Description     *string                     `json:"description,omitempty"`
	IPCidrRange     *string                     `json:"ipCidrRange,omitempty"`
	Labels          map[string]string           `json:"labels,omitempty"`
	Name            *string                     `json:"name,omitempty"`
	Network         *string                     `json:"network,omitempty"`
	Overlaps        []InternalRangeOverlapsEnum `json:"overlaps,omitempty"`
	Peering         *InternalRangePeeringEnum   `json:"peering,omitempty"`
	PrefixLength    *int32                      `json:"prefixLength,omitempty"`
	TargetCidrRange []string                    `json:"targetCidrRange,omitempty"`
	UpdateTime      *string                     `json:"updateTime,omitempty"`
	Usage           *InternalRangeUsageEnum     `json:"usage,omitempty"`
}
