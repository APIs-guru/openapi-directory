import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IpAllocationPolicy
/** 
 * Configuration for controlling how IPs are allocated in the GKE cluster.
**/
export class IpAllocationPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterIpv4CidrBlock" })
  clusterIpv4CidrBlock?: string;

  @Metadata({ data: "json, name=clusterSecondaryRangeName" })
  clusterSecondaryRangeName?: string;

  @Metadata({ data: "json, name=servicesIpv4CidrBlock" })
  servicesIpv4CidrBlock?: string;

  @Metadata({ data: "json, name=servicesSecondaryRangeName" })
  servicesSecondaryRangeName?: string;

  @Metadata({ data: "json, name=useIpAliases" })
  useIpAliases?: boolean;
}
