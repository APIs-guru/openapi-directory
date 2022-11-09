import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ManagedZoneCloudLoggingConfig } from "./managedzonecloudloggingconfig";
import { ManagedZoneDnsSecConfig } from "./managedzonednssecconfig";
import { ManagedZoneForwardingConfig } from "./managedzoneforwardingconfig";
import { ManagedZonePeeringConfig } from "./managedzonepeeringconfig";
import { ManagedZonePrivateVisibilityConfig } from "./managedzoneprivatevisibilityconfig";
import { ManagedZoneReverseLookupConfig } from "./managedzonereverselookupconfig";
import { ManagedZoneServiceDirectoryConfig } from "./managedzoneservicedirectoryconfig";

export enum ManagedZoneVisibilityEnum {
    Public = "PUBLIC"
,    Private = "PRIVATE"
}


// ManagedZone
/** 
 * A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.
**/
export class ManagedZone extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudLoggingConfig" })
  cloudLoggingConfig?: ManagedZoneCloudLoggingConfig;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dnsName" })
  dnsName?: string;

  @Metadata({ data: "json, name=dnssecConfig" })
  dnssecConfig?: ManagedZoneDnsSecConfig;

  @Metadata({ data: "json, name=forwardingConfig" })
  forwardingConfig?: ManagedZoneForwardingConfig;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nameServerSet" })
  nameServerSet?: string;

  @Metadata({ data: "json, name=nameServers" })
  nameServers?: string[];

  @Metadata({ data: "json, name=peeringConfig" })
  peeringConfig?: ManagedZonePeeringConfig;

  @Metadata({ data: "json, name=privateVisibilityConfig" })
  privateVisibilityConfig?: ManagedZonePrivateVisibilityConfig;

  @Metadata({ data: "json, name=reverseLookupConfig" })
  reverseLookupConfig?: ManagedZoneReverseLookupConfig;

  @Metadata({ data: "json, name=serviceDirectoryConfig" })
  serviceDirectoryConfig?: ManagedZoneServiceDirectoryConfig;

  @Metadata({ data: "json, name=visibility" })
  visibility?: ManagedZoneVisibilityEnum;
}
