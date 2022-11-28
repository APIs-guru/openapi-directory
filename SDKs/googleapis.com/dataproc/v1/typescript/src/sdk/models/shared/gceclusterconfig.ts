import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfidentialInstanceConfig } from "./confidentialinstanceconfig";
import { NodeGroupAffinity } from "./nodegroupaffinity";
import { ReservationAffinity } from "./reservationaffinity";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";


export enum GceClusterConfigPrivateIpv6GoogleAccessEnum {
    PrivateIpv6GoogleAccessUnspecified = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
    InheritFromSubnetwork = "INHERIT_FROM_SUBNETWORK",
    Outbound = "OUTBOUND",
    Bidirectional = "BIDIRECTIONAL"
}


// GceClusterConfig
/** 
 * Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster.
**/
export class GceClusterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidentialInstanceConfig" })
  confidentialInstanceConfig?: ConfidentialInstanceConfig;

  @SpeakeasyMetadata({ data: "json, name=internalIpOnly" })
  internalIpOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=networkUri" })
  networkUri?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeGroupAffinity" })
  nodeGroupAffinity?: NodeGroupAffinity;

  @SpeakeasyMetadata({ data: "json, name=privateIpv6GoogleAccess" })
  privateIpv6GoogleAccess?: GceClusterConfigPrivateIpv6GoogleAccessEnum;

  @SpeakeasyMetadata({ data: "json, name=reservationAffinity" })
  reservationAffinity?: ReservationAffinity;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountScopes" })
  serviceAccountScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=shieldedInstanceConfig" })
  shieldedInstanceConfig?: ShieldedInstanceConfig;

  @SpeakeasyMetadata({ data: "json, name=subnetworkUri" })
  subnetworkUri?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=zoneUri" })
  zoneUri?: string;
}
