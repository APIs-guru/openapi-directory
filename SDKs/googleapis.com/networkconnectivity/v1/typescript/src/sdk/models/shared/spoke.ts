import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinkedInterconnectAttachments } from "./linkedinterconnectattachments";
import { LinkedRouterApplianceInstances } from "./linkedrouterapplianceinstances";
import { LinkedVpnTunnels } from "./linkedvpntunnels";
import { LinkedInterconnectAttachmentsInput } from "./linkedinterconnectattachments";
import { LinkedRouterApplianceInstancesInput } from "./linkedrouterapplianceinstances";
import { LinkedVpnTunnelsInput } from "./linkedvpntunnels";


export enum SpokeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}


// Spoke
/** 
 * A Network Connectivity Center spoke represents a connection between your Google Cloud network resources and a non-Google-Cloud network. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances
**/
export class Spoke extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=hub" })
  hub?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=linkedInterconnectAttachments" })
  linkedInterconnectAttachments?: LinkedInterconnectAttachments;

  @SpeakeasyMetadata({ data: "json, name=linkedRouterApplianceInstances" })
  linkedRouterApplianceInstances?: LinkedRouterApplianceInstances;

  @SpeakeasyMetadata({ data: "json, name=linkedVpnTunnels" })
  linkedVpnTunnels?: LinkedVpnTunnels;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: SpokeStateEnum;

  @SpeakeasyMetadata({ data: "json, name=uniqueId" })
  uniqueId?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// SpokeInput
/** 
 * A Network Connectivity Center spoke represents a connection between your Google Cloud network resources and a non-Google-Cloud network. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances
**/
export class SpokeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=hub" })
  hub?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=linkedInterconnectAttachments" })
  linkedInterconnectAttachments?: LinkedInterconnectAttachmentsInput;

  @SpeakeasyMetadata({ data: "json, name=linkedRouterApplianceInstances" })
  linkedRouterApplianceInstances?: LinkedRouterApplianceInstancesInput;

  @SpeakeasyMetadata({ data: "json, name=linkedVpnTunnels" })
  linkedVpnTunnels?: LinkedVpnTunnelsInput;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
