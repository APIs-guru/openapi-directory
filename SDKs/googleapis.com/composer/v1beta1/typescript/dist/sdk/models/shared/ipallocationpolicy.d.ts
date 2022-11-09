import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Configuration for controlling how IPs are allocated in the GKE cluster.
**/
export declare class IpAllocationPolicy extends SpeakeasyBase {
    clusterIpv4CidrBlock?: string;
    clusterSecondaryRangeName?: string;
    servicesIpv4CidrBlock?: string;
    servicesSecondaryRangeName?: string;
    useIpAliases?: boolean;
}
