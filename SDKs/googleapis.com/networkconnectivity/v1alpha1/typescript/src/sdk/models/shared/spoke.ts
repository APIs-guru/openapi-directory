import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RouterApplianceInstance } from "./routerapplianceinstance";

export enum SpokeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
}


// Spoke
/** 
 * A Spoke is an abstraction of a network attachment being attached to a Hub. A Spoke can be underlying a VPN tunnel, a VLAN (interconnect) attachment, a Router appliance, etc.
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
  linkedInterconnectAttachments?: string[];

  @Metadata({ data: "json, name=linkedRouterApplianceInstances", elemType: shared.RouterApplianceInstance })
  linkedRouterApplianceInstances?: RouterApplianceInstance[];

  @Metadata({ data: "json, name=linkedVpnTunnels" })
  linkedVpnTunnels?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: SpokeStateEnum;

  @Metadata({ data: "json, name=uniqueId" })
  uniqueId?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
