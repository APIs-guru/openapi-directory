import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FirewallDevicesEntityTypeEnum {
    Linode = "linode"
}
/**
 * The Linode service that this Firewall has been applied to.
 *
**/
export declare class FirewallDevicesEntity extends SpeakeasyBase {
    id?: number;
    label?: string;
    type?: FirewallDevicesEntityTypeEnum;
    url?: string;
}
/**
 * Associates a Firewall with a Linode service. A Firewall can be assigned to a single Linode service at a time. Additional disabled Firewalls can be assigned to a service, but they cannot be enabled if another active Firewall is already assigned to the same service.
 *
**/
export declare class FirewallDevices extends SpeakeasyBase {
    created?: Date;
    entity?: FirewallDevicesEntity;
    id?: number;
    updated?: Date;
}
