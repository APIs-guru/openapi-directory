import { SpeakeasyBase } from "../../../internal/utils";
import { ConfidentialInstanceConfig } from "./confidentialinstanceconfig";
import { NodeGroupAffinity } from "./nodegroupaffinity";
import { ReservationAffinity } from "./reservationaffinity";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
export declare enum GceClusterConfigPrivateIpv6GoogleAccessEnum {
    PrivateIpv6GoogleAccessUnspecified = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
    InheritFromSubnetwork = "INHERIT_FROM_SUBNETWORK",
    Outbound = "OUTBOUND",
    Bidirectional = "BIDIRECTIONAL"
}
/**
 * Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster.
**/
export declare class GceClusterConfig extends SpeakeasyBase {
    confidentialInstanceConfig?: ConfidentialInstanceConfig;
    internalIpOnly?: boolean;
    metadata?: Map<string, string>;
    networkUri?: string;
    nodeGroupAffinity?: NodeGroupAffinity;
    privateIpv6GoogleAccess?: GceClusterConfigPrivateIpv6GoogleAccessEnum;
    reservationAffinity?: ReservationAffinity;
    serviceAccount?: string;
    serviceAccountScopes?: string[];
    shieldedInstanceConfig?: ShieldedInstanceConfig;
    subnetworkUri?: string;
    tags?: string[];
    zoneUri?: string;
}
