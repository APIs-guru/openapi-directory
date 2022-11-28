import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RouterApplianceInstance } from "./routerapplianceinstance";


export enum SpokeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING"
}


// SpokeInput
/** 
 * A Spoke is an abstraction of a network attachment being attached to a Hub. A Spoke can be underlying a VPN tunnel, a VLAN (interconnect) attachment, a Router appliance, etc.
**/
export class SpokeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=hub" })
  hub?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=linkedInterconnectAttachments" })
  linkedInterconnectAttachments?: string[];

  @SpeakeasyMetadata({ data: "json, name=linkedRouterApplianceInstances", elemType: RouterApplianceInstance })
  linkedRouterApplianceInstances?: RouterApplianceInstance[];

  @SpeakeasyMetadata({ data: "json, name=linkedVpnTunnels" })
  linkedVpnTunnels?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// Spoke
/** 
 * A Spoke is an abstraction of a network attachment being attached to a Hub. A Spoke can be underlying a VPN tunnel, a VLAN (interconnect) attachment, a Router appliance, etc.
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
  linkedInterconnectAttachments?: string[];

  @SpeakeasyMetadata({ data: "json, name=linkedRouterApplianceInstances", elemType: RouterApplianceInstance })
  linkedRouterApplianceInstances?: RouterApplianceInstance[];

  @SpeakeasyMetadata({ data: "json, name=linkedVpnTunnels" })
  linkedVpnTunnels?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: SpokeStateEnum;

  @SpeakeasyMetadata({ data: "json, name=uniqueId" })
  uniqueId?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
