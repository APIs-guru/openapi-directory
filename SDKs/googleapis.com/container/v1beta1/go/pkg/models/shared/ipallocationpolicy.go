package shared




type IPAllocationPolicyIpv6AccessTypeEnum string

const (
    IPAllocationPolicyIpv6AccessTypeEnumIpv6AccessTypeUnspecified IPAllocationPolicyIpv6AccessTypeEnum = "IPV6_ACCESS_TYPE_UNSPECIFIED"
IPAllocationPolicyIpv6AccessTypeEnumInternal IPAllocationPolicyIpv6AccessTypeEnum = "INTERNAL"
IPAllocationPolicyIpv6AccessTypeEnumExternal IPAllocationPolicyIpv6AccessTypeEnum = "EXTERNAL"
)



type IPAllocationPolicyStackTypeEnum string

const (
    IPAllocationPolicyStackTypeEnumStackTypeUnspecified IPAllocationPolicyStackTypeEnum = "STACK_TYPE_UNSPECIFIED"
IPAllocationPolicyStackTypeEnumIpv4 IPAllocationPolicyStackTypeEnum = "IPV4"
IPAllocationPolicyStackTypeEnumIpv4Ipv6 IPAllocationPolicyStackTypeEnum = "IPV4_IPV6"
)


type IPAllocationPolicy struct {
    AllowRouteOverlap *bool `json:"allowRouteOverlap,omitempty"`
    ClusterIpv4Cidr *string `json:"clusterIpv4Cidr,omitempty"`
    ClusterIpv4CidrBlock *string `json:"clusterIpv4CidrBlock,omitempty"`
    ClusterSecondaryRangeName *string `json:"clusterSecondaryRangeName,omitempty"`
    CreateSubnetwork *bool `json:"createSubnetwork,omitempty"`
    Ipv6AccessType *IPAllocationPolicyIpv6AccessTypeEnum `json:"ipv6AccessType,omitempty"`
    NodeIpv4Cidr *string `json:"nodeIpv4Cidr,omitempty"`
    NodeIpv4CidrBlock *string `json:"nodeIpv4CidrBlock,omitempty"`
    ServicesIpv4Cidr *string `json:"servicesIpv4Cidr,omitempty"`
    ServicesIpv4CidrBlock *string `json:"servicesIpv4CidrBlock,omitempty"`
    ServicesIpv6CidrBlock *string `json:"servicesIpv6CidrBlock,omitempty"`
    ServicesSecondaryRangeName *string `json:"servicesSecondaryRangeName,omitempty"`
    StackType *IPAllocationPolicyStackTypeEnum `json:"stackType,omitempty"`
    SubnetIpv6CidrBlock *string `json:"subnetIpv6CidrBlock,omitempty"`
    SubnetworkName *string `json:"subnetworkName,omitempty"`
    TpuIpv4CidrBlock *string `json:"tpuIpv4CidrBlock,omitempty"`
    UseIPAliases *bool `json:"useIpAliases,omitempty"`
    UseRoutes *bool `json:"useRoutes,omitempty"`
    
}

