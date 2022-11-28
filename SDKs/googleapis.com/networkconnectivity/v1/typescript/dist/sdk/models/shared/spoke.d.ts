import { SpeakeasyBase } from "../../../internal/utils";
import { LinkedInterconnectAttachments } from "./linkedinterconnectattachments";
import { LinkedRouterApplianceInstances } from "./linkedrouterapplianceinstances";
import { LinkedVpnTunnels } from "./linkedvpntunnels";
import { LinkedInterconnectAttachmentsInput } from "./linkedinterconnectattachments";
import { LinkedRouterApplianceInstancesInput } from "./linkedrouterapplianceinstances";
import { LinkedVpnTunnelsInput } from "./linkedvpntunnels";
export declare enum SpokeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * A Network Connectivity Center spoke represents a connection between your Google Cloud network resources and a non-Google-Cloud network. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances
**/
export declare class Spoke extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    hub?: string;
    labels?: Map<string, string>;
    linkedInterconnectAttachments?: LinkedInterconnectAttachments;
    linkedRouterApplianceInstances?: LinkedRouterApplianceInstances;
    linkedVpnTunnels?: LinkedVpnTunnels;
    name?: string;
    state?: SpokeStateEnum;
    uniqueId?: string;
    updateTime?: string;
}
/**
 * A Network Connectivity Center spoke represents a connection between your Google Cloud network resources and a non-Google-Cloud network. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances
**/
export declare class SpokeInput extends SpeakeasyBase {
    description?: string;
    hub?: string;
    labels?: Map<string, string>;
    linkedInterconnectAttachments?: LinkedInterconnectAttachmentsInput;
    linkedRouterApplianceInstances?: LinkedRouterApplianceInstancesInput;
    linkedVpnTunnels?: LinkedVpnTunnelsInput;
    name?: string;
}
