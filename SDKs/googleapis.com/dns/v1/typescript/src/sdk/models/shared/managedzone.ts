import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedZoneCloudLoggingConfig } from "./managedzonecloudloggingconfig";
import { ManagedZoneDnsSecConfig } from "./managedzonednssecconfig";
import { ManagedZoneForwardingConfig } from "./managedzoneforwardingconfig";
import { ManagedZonePeeringConfig } from "./managedzonepeeringconfig";
import { ManagedZonePrivateVisibilityConfig } from "./managedzoneprivatevisibilityconfig";
import { ManagedZoneReverseLookupConfig } from "./managedzonereverselookupconfig";
import { ManagedZoneServiceDirectoryConfig } from "./managedzoneservicedirectoryconfig";


export enum ManagedZoneVisibilityEnum {
    Public = "public",
    Private = "private"
}


// ManagedZone
/** 
 * A zone is a subtree of the DNS namespace under one administrative responsibility. A ManagedZone is a resource that represents a DNS zone hosted by the Cloud DNS service.
**/
export class ManagedZone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudLoggingConfig" })
  cloudLoggingConfig?: ManagedZoneCloudLoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dnsName" })
  dnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=dnssecConfig" })
  dnssecConfig?: ManagedZoneDnsSecConfig;

  @SpeakeasyMetadata({ data: "json, name=forwardingConfig" })
  forwardingConfig?: ManagedZoneForwardingConfig;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nameServerSet" })
  nameServerSet?: string;

  @SpeakeasyMetadata({ data: "json, name=nameServers" })
  nameServers?: string[];

  @SpeakeasyMetadata({ data: "json, name=peeringConfig" })
  peeringConfig?: ManagedZonePeeringConfig;

  @SpeakeasyMetadata({ data: "json, name=privateVisibilityConfig" })
  privateVisibilityConfig?: ManagedZonePrivateVisibilityConfig;

  @SpeakeasyMetadata({ data: "json, name=reverseLookupConfig" })
  reverseLookupConfig?: ManagedZoneReverseLookupConfig;

  @SpeakeasyMetadata({ data: "json, name=serviceDirectoryConfig" })
  serviceDirectoryConfig?: ManagedZoneServiceDirectoryConfig;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: ManagedZoneVisibilityEnum;
}
