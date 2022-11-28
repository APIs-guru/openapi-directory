import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IpAllocationPolicyIpv6AccessTypeEnum {
    Ipv6AccessTypeUnspecified = "IPV6_ACCESS_TYPE_UNSPECIFIED",
    Internal = "INTERNAL",
    External = "EXTERNAL"
}
export declare enum IpAllocationPolicyStackTypeEnum {
    StackTypeUnspecified = "STACK_TYPE_UNSPECIFIED",
    Ipv4 = "IPV4",
    Ipv4Ipv6 = "IPV4_IPV6"
}
/**
 * Configuration for controlling how IPs are allocated in the cluster.
**/
export declare class IpAllocationPolicy extends SpeakeasyBase {
    allowRouteOverlap?: boolean;
    clusterIpv4Cidr?: string;
    clusterIpv4CidrBlock?: string;
    clusterSecondaryRangeName?: string;
    createSubnetwork?: boolean;
    ipv6AccessType?: IpAllocationPolicyIpv6AccessTypeEnum;
    nodeIpv4Cidr?: string;
    nodeIpv4CidrBlock?: string;
    servicesIpv4Cidr?: string;
    servicesIpv4CidrBlock?: string;
    servicesIpv6CidrBlock?: string;
    servicesSecondaryRangeName?: string;
    stackType?: IpAllocationPolicyStackTypeEnum;
    subnetIpv6CidrBlock?: string;
    subnetworkName?: string;
    tpuIpv4CidrBlock?: string;
    useIpAliases?: boolean;
    useRoutes?: boolean;
}
/**
 * Configuration for controlling how IPs are allocated in the cluster.
**/
export declare class IpAllocationPolicyInput extends SpeakeasyBase {
    allowRouteOverlap?: boolean;
    clusterIpv4Cidr?: string;
    clusterIpv4CidrBlock?: string;
    clusterSecondaryRangeName?: string;
    createSubnetwork?: boolean;
    ipv6AccessType?: IpAllocationPolicyIpv6AccessTypeEnum;
    nodeIpv4Cidr?: string;
    nodeIpv4CidrBlock?: string;
    servicesIpv4Cidr?: string;
    servicesIpv4CidrBlock?: string;
    servicesSecondaryRangeName?: string;
    stackType?: IpAllocationPolicyStackTypeEnum;
    subnetworkName?: string;
    tpuIpv4CidrBlock?: string;
    useIpAliases?: boolean;
    useRoutes?: boolean;
}
