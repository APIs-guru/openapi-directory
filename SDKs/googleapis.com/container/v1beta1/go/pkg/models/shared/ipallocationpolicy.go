package shared

type IPAllocationPolicyIpv6AccessTypeEnum string

const (
	IPAllocationPolicyIpv6AccessTypeEnumIpv6AccessTypeUnspecified IPAllocationPolicyIpv6AccessTypeEnum = "IPV6_ACCESS_TYPE_UNSPECIFIED"
	IPAllocationPolicyIpv6AccessTypeEnumInternal                  IPAllocationPolicyIpv6AccessTypeEnum = "INTERNAL"
	IPAllocationPolicyIpv6AccessTypeEnumExternal                  IPAllocationPolicyIpv6AccessTypeEnum = "EXTERNAL"
)

type IPAllocationPolicyStackTypeEnum string

const (
	IPAllocationPolicyStackTypeEnumStackTypeUnspecified IPAllocationPolicyStackTypeEnum = "STACK_TYPE_UNSPECIFIED"
	IPAllocationPolicyStackTypeEnumIpv4                 IPAllocationPolicyStackTypeEnum = "IPV4"
	IPAllocationPolicyStackTypeEnumIpv4Ipv6             IPAllocationPolicyStackTypeEnum = "IPV4_IPV6"
)

type IPAllocationPolicy struct {
	AllowRouteOverlap          *bool                                 `json:"allowRouteOverlap"`
	ClusterIpv4Cidr            *string                               `json:"clusterIpv4Cidr"`
	ClusterIpv4CidrBlock       *string                               `json:"clusterIpv4CidrBlock"`
	ClusterSecondaryRangeName  *string                               `json:"clusterSecondaryRangeName"`
	CreateSubnetwork           *bool                                 `json:"createSubnetwork"`
	Ipv6AccessType             *IPAllocationPolicyIpv6AccessTypeEnum `json:"ipv6AccessType"`
	NodeIpv4Cidr               *string                               `json:"nodeIpv4Cidr"`
	NodeIpv4CidrBlock          *string                               `json:"nodeIpv4CidrBlock"`
	ServicesIpv4Cidr           *string                               `json:"servicesIpv4Cidr"`
	ServicesIpv4CidrBlock      *string                               `json:"servicesIpv4CidrBlock"`
	ServicesIpv6CidrBlock      *string                               `json:"servicesIpv6CidrBlock"`
	ServicesSecondaryRangeName *string                               `json:"servicesSecondaryRangeName"`
	StackType                  *IPAllocationPolicyStackTypeEnum      `json:"stackType"`
	SubnetIpv6CidrBlock        *string                               `json:"subnetIpv6CidrBlock"`
	SubnetworkName             *string                               `json:"subnetworkName"`
	TpuIpv4CidrBlock           *string                               `json:"tpuIpv4CidrBlock"`
	UseIPAliases               *bool                                 `json:"useIpAliases"`
	UseRoutes                  *bool                                 `json:"useRoutes"`
}
