import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FirewallDevicesEntityTypeEnum {
    Linode = "linode"
}


// FirewallDevicesEntity
/** 
 * The Linode service that this Firewall has been applied to.
 * 
**/
export class FirewallDevicesEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=type" })
  type?: FirewallDevicesEntityTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// FirewallDevices
/** 
 * Associates a Firewall with a Linode service. A Firewall can be assigned to a single Linode service at a time. Additional disabled Firewalls can be assigned to a service, but they cannot be enabled if another active Firewall is already assigned to the same service.
 * 
**/
export class FirewallDevices extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=entity" })
  entity?: FirewallDevicesEntity;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
