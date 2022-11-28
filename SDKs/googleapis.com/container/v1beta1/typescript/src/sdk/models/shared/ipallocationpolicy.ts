import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IpAllocationPolicyIpv6AccessTypeEnum {
    Ipv6AccessTypeUnspecified = "IPV6_ACCESS_TYPE_UNSPECIFIED",
    Internal = "INTERNAL",
    External = "EXTERNAL"
}

export enum IpAllocationPolicyStackTypeEnum {
    StackTypeUnspecified = "STACK_TYPE_UNSPECIFIED",
    Ipv4 = "IPV4",
    Ipv4Ipv6 = "IPV4_IPV6"
}


// IpAllocationPolicy
/** 
 * Configuration for controlling how IPs are allocated in the cluster.
**/
export class IpAllocationPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowRouteOverlap" })
  allowRouteOverlap?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clusterIpv4Cidr" })
  clusterIpv4Cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=clusterIpv4CidrBlock" })
  clusterIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=clusterSecondaryRangeName" })
  clusterSecondaryRangeName?: string;

  @SpeakeasyMetadata({ data: "json, name=createSubnetwork" })
  createSubnetwork?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ipv6AccessType" })
  ipv6AccessType?: IpAllocationPolicyIpv6AccessTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=nodeIpv4Cidr" })
  nodeIpv4Cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeIpv4CidrBlock" })
  nodeIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=servicesIpv4Cidr" })
  servicesIpv4Cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=servicesIpv4CidrBlock" })
  servicesIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=servicesIpv6CidrBlock" })
  servicesIpv6CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=servicesSecondaryRangeName" })
  servicesSecondaryRangeName?: string;

  @SpeakeasyMetadata({ data: "json, name=stackType" })
  stackType?: IpAllocationPolicyStackTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=subnetIpv6CidrBlock" })
  subnetIpv6CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetworkName" })
  subnetworkName?: string;

  @SpeakeasyMetadata({ data: "json, name=tpuIpv4CidrBlock" })
  tpuIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=useIpAliases" })
  useIpAliases?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useRoutes" })
  useRoutes?: boolean;
}


// IpAllocationPolicyInput
/** 
 * Configuration for controlling how IPs are allocated in the cluster.
**/
export class IpAllocationPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowRouteOverlap" })
  allowRouteOverlap?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clusterIpv4Cidr" })
  clusterIpv4Cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=clusterIpv4CidrBlock" })
  clusterIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=clusterSecondaryRangeName" })
  clusterSecondaryRangeName?: string;

  @SpeakeasyMetadata({ data: "json, name=createSubnetwork" })
  createSubnetwork?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ipv6AccessType" })
  ipv6AccessType?: IpAllocationPolicyIpv6AccessTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=nodeIpv4Cidr" })
  nodeIpv4Cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeIpv4CidrBlock" })
  nodeIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=servicesIpv4Cidr" })
  servicesIpv4Cidr?: string;

  @SpeakeasyMetadata({ data: "json, name=servicesIpv4CidrBlock" })
  servicesIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=servicesSecondaryRangeName" })
  servicesSecondaryRangeName?: string;

  @SpeakeasyMetadata({ data: "json, name=stackType" })
  stackType?: IpAllocationPolicyStackTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=subnetworkName" })
  subnetworkName?: string;

  @SpeakeasyMetadata({ data: "json, name=tpuIpv4CidrBlock" })
  tpuIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=useIpAliases" })
  useIpAliases?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useRoutes" })
  useRoutes?: boolean;
}
