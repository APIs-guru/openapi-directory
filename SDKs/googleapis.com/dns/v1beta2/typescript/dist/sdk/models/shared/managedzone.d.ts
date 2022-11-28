import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedZoneCloudLoggingConfig } from "./managedzonecloudloggingconfig";
import { ManagedZoneDnsSecConfig } from "./managedzonednssecconfig";
import { ManagedZoneForwardingConfig } from "./managedzoneforwardingconfig";
import { ManagedZonePeeringConfig } from "./managedzonepeeringconfig";
import { ManagedZonePrivateVisibilityConfig } from "./managedzoneprivatevisibilityconfig";
import { ManagedZoneReverseLookupConfig } from "./managedzonereverselookupconfig";
import { ManagedZoneServiceDirectoryConfig } from "./managedzoneservicedirectoryconfig";
export declare enum ManagedZoneVisibilityEnum {
    Public = "public",
    Private = "private"
}
/**
 * A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.
**/
export declare class ManagedZone extends SpeakeasyBase {
    cloudLoggingConfig?: ManagedZoneCloudLoggingConfig;
    creationTime?: string;
    description?: string;
    dnsName?: string;
    dnssecConfig?: ManagedZoneDnsSecConfig;
    forwardingConfig?: ManagedZoneForwardingConfig;
    id?: string;
    kind?: string;
    labels?: Map<string, string>;
    name?: string;
    nameServerSet?: string;
    nameServers?: string[];
    peeringConfig?: ManagedZonePeeringConfig;
    privateVisibilityConfig?: ManagedZonePrivateVisibilityConfig;
    reverseLookupConfig?: ManagedZoneReverseLookupConfig;
    serviceDirectoryConfig?: ManagedZoneServiceDirectoryConfig;
    visibility?: ManagedZoneVisibilityEnum;
}
