import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RouterApplianceInstance
/** 
 * RouterAppliance represents a Router appliance which is specified by a VM URI and a NIC address.
**/
export class RouterApplianceInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=networkInterface" })
  networkInterface?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualMachine" })
  virtualMachine?: string;
}
