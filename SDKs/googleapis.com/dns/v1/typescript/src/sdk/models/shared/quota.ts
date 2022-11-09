import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DnsKeySpec } from "./dnskeyspec";


// Quota
/** 
 * Limits associated with a Project.
**/
export class Quota extends SpeakeasyBase {
  @Metadata({ data: "json, name=dnsKeysPerManagedZone" })
  dnsKeysPerManagedZone?: number;

  @Metadata({ data: "json, name=gkeClustersPerManagedZone" })
  gkeClustersPerManagedZone?: number;

  @Metadata({ data: "json, name=gkeClustersPerPolicy" })
  gkeClustersPerPolicy?: number;

  @Metadata({ data: "json, name=gkeClustersPerResponsePolicy" })
  gkeClustersPerResponsePolicy?: number;

  @Metadata({ data: "json, name=itemsPerRoutingPolicy" })
  itemsPerRoutingPolicy?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=managedZones" })
  managedZones?: number;

  @Metadata({ data: "json, name=managedZonesPerGkeCluster" })
  managedZonesPerGkeCluster?: number;

  @Metadata({ data: "json, name=managedZonesPerNetwork" })
  managedZonesPerNetwork?: number;

  @Metadata({ data: "json, name=networksPerManagedZone" })
  networksPerManagedZone?: number;

  @Metadata({ data: "json, name=networksPerPolicy" })
  networksPerPolicy?: number;

  @Metadata({ data: "json, name=networksPerResponsePolicy" })
  networksPerResponsePolicy?: number;

  @Metadata({ data: "json, name=peeringZonesPerTargetNetwork" })
  peeringZonesPerTargetNetwork?: number;

  @Metadata({ data: "json, name=policies" })
  policies?: number;

  @Metadata({ data: "json, name=resourceRecordsPerRrset" })
  resourceRecordsPerRrset?: number;

  @Metadata({ data: "json, name=responsePolicies" })
  responsePolicies?: number;

  @Metadata({ data: "json, name=responsePolicyRulesPerResponsePolicy" })
  responsePolicyRulesPerResponsePolicy?: number;

  @Metadata({ data: "json, name=rrsetAdditionsPerChange" })
  rrsetAdditionsPerChange?: number;

  @Metadata({ data: "json, name=rrsetDeletionsPerChange" })
  rrsetDeletionsPerChange?: number;

  @Metadata({ data: "json, name=rrsetsPerManagedZone" })
  rrsetsPerManagedZone?: number;

  @Metadata({ data: "json, name=targetNameServersPerManagedZone" })
  targetNameServersPerManagedZone?: number;

  @Metadata({ data: "json, name=targetNameServersPerPolicy" })
  targetNameServersPerPolicy?: number;

  @Metadata({ data: "json, name=totalRrdataSizePerChange" })
  totalRrdataSizePerChange?: number;

  @Metadata({ data: "json, name=whitelistedKeySpecs", elemType: shared.DnsKeySpec })
  whitelistedKeySpecs?: DnsKeySpec[];
}
