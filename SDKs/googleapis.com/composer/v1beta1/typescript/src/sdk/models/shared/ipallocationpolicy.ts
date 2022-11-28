import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpAllocationPolicy
/** 
 * Configuration for controlling how IPs are allocated in the GKE cluster.
**/
export class IpAllocationPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterIpv4CidrBlock" })
  clusterIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=clusterSecondaryRangeName" })
  clusterSecondaryRangeName?: string;

  @SpeakeasyMetadata({ data: "json, name=servicesIpv4CidrBlock" })
  servicesIpv4CidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=servicesSecondaryRangeName" })
  servicesSecondaryRangeName?: string;

  @SpeakeasyMetadata({ data: "json, name=useIpAliases" })
  useIpAliases?: boolean;
}
