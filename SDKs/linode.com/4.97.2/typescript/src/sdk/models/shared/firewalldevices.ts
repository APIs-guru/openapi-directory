import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FirewallDevicesEntityTypeEnum {
    Linode = "linode"
}


// FirewallDevicesEntity
/** 
 * The Linode service that this Firewall has been applied to.
 * 
**/
export class FirewallDevicesEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: FirewallDevicesEntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// FirewallDevices
/** 
 * Associates a Firewall with a Linode service. A Firewall can be assigned to a single Linode service at a time. Additional disabled Firewalls can be assigned to a service, but they cannot be enabled if another active Firewall is already assigned to the same service.
 * 
**/
export class FirewallDevices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: FirewallDevicesEntity;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
