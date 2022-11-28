import { SpeakeasyBase } from "../../../internal/utils";
import { DnsKeySpec } from "./dnskeyspec";
/**
 * Limits associated with a Project.
**/
export declare class Quota extends SpeakeasyBase {
    dnsKeysPerManagedZone?: number;
    gkeClustersPerManagedZone?: number;
    gkeClustersPerPolicy?: number;
    gkeClustersPerResponsePolicy?: number;
    itemsPerRoutingPolicy?: number;
    kind?: string;
    managedZones?: number;
    managedZonesPerGkeCluster?: number;
    managedZonesPerNetwork?: number;
    networksPerManagedZone?: number;
    networksPerPolicy?: number;
    networksPerResponsePolicy?: number;
    peeringZonesPerTargetNetwork?: number;
    policies?: number;
    resourceRecordsPerRrset?: number;
    responsePolicies?: number;
    responsePolicyRulesPerResponsePolicy?: number;
    rrsetAdditionsPerChange?: number;
    rrsetDeletionsPerChange?: number;
    rrsetsPerManagedZone?: number;
    targetNameServersPerManagedZone?: number;
    targetNameServersPerPolicy?: number;
    totalRrdataSizePerChange?: number;
    whitelistedKeySpecs?: DnsKeySpec[];
}
