import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsKeySpec } from "./dnskeyspec";



// Quota
/** 
 * Limits associated with a Project.
**/
export class Quota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dnsKeysPerManagedZone" })
  dnsKeysPerManagedZone?: number;

  @SpeakeasyMetadata({ data: "json, name=gkeClustersPerManagedZone" })
  gkeClustersPerManagedZone?: number;

  @SpeakeasyMetadata({ data: "json, name=gkeClustersPerPolicy" })
  gkeClustersPerPolicy?: number;

  @SpeakeasyMetadata({ data: "json, name=gkeClustersPerResponsePolicy" })
  gkeClustersPerResponsePolicy?: number;

  @SpeakeasyMetadata({ data: "json, name=itemsPerRoutingPolicy" })
  itemsPerRoutingPolicy?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=managedZones" })
  managedZones?: number;

  @SpeakeasyMetadata({ data: "json, name=managedZonesPerGkeCluster" })
  managedZonesPerGkeCluster?: number;

  @SpeakeasyMetadata({ data: "json, name=managedZonesPerNetwork" })
  managedZonesPerNetwork?: number;

  @SpeakeasyMetadata({ data: "json, name=networksPerManagedZone" })
  networksPerManagedZone?: number;

  @SpeakeasyMetadata({ data: "json, name=networksPerPolicy" })
  networksPerPolicy?: number;

  @SpeakeasyMetadata({ data: "json, name=networksPerResponsePolicy" })
  networksPerResponsePolicy?: number;

  @SpeakeasyMetadata({ data: "json, name=peeringZonesPerTargetNetwork" })
  peeringZonesPerTargetNetwork?: number;

  @SpeakeasyMetadata({ data: "json, name=policies" })
  policies?: number;

  @SpeakeasyMetadata({ data: "json, name=resourceRecordsPerRrset" })
  resourceRecordsPerRrset?: number;

  @SpeakeasyMetadata({ data: "json, name=responsePolicies" })
  responsePolicies?: number;

  @SpeakeasyMetadata({ data: "json, name=responsePolicyRulesPerResponsePolicy" })
  responsePolicyRulesPerResponsePolicy?: number;

  @SpeakeasyMetadata({ data: "json, name=rrsetAdditionsPerChange" })
  rrsetAdditionsPerChange?: number;

  @SpeakeasyMetadata({ data: "json, name=rrsetDeletionsPerChange" })
  rrsetDeletionsPerChange?: number;

  @SpeakeasyMetadata({ data: "json, name=rrsetsPerManagedZone" })
  rrsetsPerManagedZone?: number;

  @SpeakeasyMetadata({ data: "json, name=targetNameServersPerManagedZone" })
  targetNameServersPerManagedZone?: number;

  @SpeakeasyMetadata({ data: "json, name=targetNameServersPerPolicy" })
  targetNameServersPerPolicy?: number;

  @SpeakeasyMetadata({ data: "json, name=totalRrdataSizePerChange" })
  totalRrdataSizePerChange?: number;

  @SpeakeasyMetadata({ data: "json, name=whitelistedKeySpecs", elemType: DnsKeySpec })
  whitelistedKeySpecs?: DnsKeySpec[];
}
