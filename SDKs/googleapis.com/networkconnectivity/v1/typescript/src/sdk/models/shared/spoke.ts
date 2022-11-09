import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LinkedInterconnectAttachments } from "./linkedinterconnectattachments";
import { LinkedRouterApplianceInstances } from "./linkedrouterapplianceinstances";
import { LinkedVpnTunnels } from "./linkedvpntunnels";

export enum SpokeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
}


// Spoke
/** 
 * A Network Connectivity Center spoke represents a connection between your Google Cloud network resources and a non-Google-Cloud network. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances
**/
export class Spoke extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=hub" })
  hub?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=linkedInterconnectAttachments" })
  linkedInterconnectAttachments?: LinkedInterconnectAttachments;

  @Metadata({ data: "json, name=linkedRouterApplianceInstances" })
  linkedRouterApplianceInstances?: LinkedRouterApplianceInstances;

  @Metadata({ data: "json, name=linkedVpnTunnels" })
  linkedVpnTunnels?: LinkedVpnTunnels;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: SpokeStateEnum;

  @Metadata({ data: "json, name=uniqueId" })
  uniqueId?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
