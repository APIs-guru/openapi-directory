import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RouterApplianceInstance
/** 
 * A router appliance instance is a Compute Engine virtual machine (VM) instance that acts as a BGP speaker. A router appliance instance is specified by the URI of the VM and the internal IP address of one of the VM's network interfaces.
**/
export class RouterApplianceInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=virtualMachine" })
  virtualMachine?: string;
}
