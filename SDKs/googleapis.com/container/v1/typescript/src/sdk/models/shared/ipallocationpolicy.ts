import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum IpAllocationPolicyIpv6AccessTypeEnum {
    Ipv6AccessTypeUnspecified = "IPV6_ACCESS_TYPE_UNSPECIFIED"
,    Internal = "INTERNAL"
,    External = "EXTERNAL"
}

export enum IpAllocationPolicyStackTypeEnum {
    StackTypeUnspecified = "STACK_TYPE_UNSPECIFIED"
,    Ipv4 = "IPV4"
,    Ipv4Ipv6 = "IPV4_IPV6"
}


// IpAllocationPolicy
/** 
 * Configuration for controlling how IPs are allocated in the cluster.
**/
export class IpAllocationPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterIpv4Cidr" })
  clusterIpv4Cidr?: string;

  @Metadata({ data: "json, name=clusterIpv4CidrBlock" })
  clusterIpv4CidrBlock?: string;

  @Metadata({ data: "json, name=clusterSecondaryRangeName" })
  clusterSecondaryRangeName?: string;

  @Metadata({ data: "json, name=createSubnetwork" })
  createSubnetwork?: boolean;

  @Metadata({ data: "json, name=ipv6AccessType" })
  ipv6AccessType?: IpAllocationPolicyIpv6AccessTypeEnum;

  @Metadata({ data: "json, name=nodeIpv4Cidr" })
  nodeIpv4Cidr?: string;

  @Metadata({ data: "json, name=nodeIpv4CidrBlock" })
  nodeIpv4CidrBlock?: string;

  @Metadata({ data: "json, name=servicesIpv4Cidr" })
  servicesIpv4Cidr?: string;

  @Metadata({ data: "json, name=servicesIpv4CidrBlock" })
  servicesIpv4CidrBlock?: string;

  @Metadata({ data: "json, name=servicesSecondaryRangeName" })
  servicesSecondaryRangeName?: string;

  @Metadata({ data: "json, name=stackType" })
  stackType?: IpAllocationPolicyStackTypeEnum;

  @Metadata({ data: "json, name=subnetworkName" })
  subnetworkName?: string;

  @Metadata({ data: "json, name=tpuIpv4CidrBlock" })
  tpuIpv4CidrBlock?: string;

  @Metadata({ data: "json, name=useIpAliases" })
  useIpAliases?: boolean;

  @Metadata({ data: "json, name=useRoutes" })
  useRoutes?: boolean;
}
