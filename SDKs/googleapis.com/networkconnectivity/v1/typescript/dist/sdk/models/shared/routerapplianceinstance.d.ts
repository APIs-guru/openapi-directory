import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A router appliance instance is a Compute Engine virtual machine (VM) instance that acts as a BGP speaker. A router appliance instance is specified by the URI of the VM and the internal IP address of one of the VM's network interfaces.
**/
export declare class RouterApplianceInstance extends SpeakeasyBase {
    ipAddress?: string;
    virtualMachine?: string;
}
