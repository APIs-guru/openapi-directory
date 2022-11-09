import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RouterApplianceInstance
/** 
 * RouterAppliance represents a Router appliance which is specified by a VM URI and a NIC address.
**/
export class RouterApplianceInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=networkInterface" })
  networkInterface?: string;

  @Metadata({ data: "json, name=virtualMachine" })
  virtualMachine?: string;
}
