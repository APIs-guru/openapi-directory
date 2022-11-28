import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomMachineType } from "./custommachinetype";
import { PredefinedMachineType } from "./predefinedmachinetype";



// MachineType
/** 
 * Specification of machine series, memory, and number of vCPUs.
**/
export class MachineType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customMachineType" })
  customMachineType?: CustomMachineType;

  @SpeakeasyMetadata({ data: "json, name=predefinedMachineType" })
  predefinedMachineType?: PredefinedMachineType;
}
