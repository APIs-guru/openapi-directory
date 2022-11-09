import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfidentialInstanceConfig } from "./confidentialinstanceconfig";
import { NodeGroupAffinity } from "./nodegroupaffinity";
import { ReservationAffinity } from "./reservationaffinity";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";

export enum GceClusterConfigPrivateIpv6GoogleAccessEnum {
    PrivateIpv6GoogleAccessUnspecified = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
,    InheritFromSubnetwork = "INHERIT_FROM_SUBNETWORK"
,    Outbound = "OUTBOUND"
,    Bidirectional = "BIDIRECTIONAL"
}


// GceClusterConfig
/** 
 * Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster.
**/
export class GceClusterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=confidentialInstanceConfig" })
  confidentialInstanceConfig?: ConfidentialInstanceConfig;

  @Metadata({ data: "json, name=internalIpOnly" })
  internalIpOnly?: boolean;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=networkUri" })
  networkUri?: string;

  @Metadata({ data: "json, name=nodeGroupAffinity" })
  nodeGroupAffinity?: NodeGroupAffinity;

  @Metadata({ data: "json, name=privateIpv6GoogleAccess" })
  privateIpv6GoogleAccess?: GceClusterConfigPrivateIpv6GoogleAccessEnum;

  @Metadata({ data: "json, name=reservationAffinity" })
  reservationAffinity?: ReservationAffinity;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=serviceAccountScopes" })
  serviceAccountScopes?: string[];

  @Metadata({ data: "json, name=shieldedInstanceConfig" })
  shieldedInstanceConfig?: ShieldedInstanceConfig;

  @Metadata({ data: "json, name=subnetworkUri" })
  subnetworkUri?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=zoneUri" })
  zoneUri?: string;
}
