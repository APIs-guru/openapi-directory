import { SpeakeasyBase } from "../../../internal/utils";
import { RouterApplianceInstance } from "./routerapplianceinstance";
export declare enum SpokeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * A Spoke is an abstraction of a network attachment being attached to a Hub. A Spoke can be underlying a VPN tunnel, a VLAN (interconnect) attachment, a Router appliance, etc.
**/
export declare class SpokeInput extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    hub?: string;
    labels?: Map<string, string>;
    linkedInterconnectAttachments?: string[];
    linkedRouterApplianceInstances?: RouterApplianceInstance[];
    linkedVpnTunnels?: string[];
    name?: string;
    updateTime?: string;
}
/**
 * A Spoke is an abstraction of a network attachment being attached to a Hub. A Spoke can be underlying a VPN tunnel, a VLAN (interconnect) attachment, a Router appliance, etc.
**/
export declare class Spoke extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    hub?: string;
    labels?: Map<string, string>;
    linkedInterconnectAttachments?: string[];
    linkedRouterApplianceInstances?: RouterApplianceInstance[];
    linkedVpnTunnels?: string[];
    name?: string;
    state?: SpokeStateEnum;
    uniqueId?: string;
    updateTime?: string;
}
