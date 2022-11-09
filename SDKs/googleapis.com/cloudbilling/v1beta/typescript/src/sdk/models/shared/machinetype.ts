import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomMachineType } from "./custommachinetype";
import { PredefinedMachineType } from "./predefinedmachinetype";


// MachineType
/** 
 * Specification of machine series, memory, and number of vCPUs.
**/
export class MachineType extends SpeakeasyBase {
  @Metadata({ data: "json, name=customMachineType" })
  customMachineType?: CustomMachineType;

  @Metadata({ data: "json, name=predefinedMachineType" })
  predefinedMachineType?: PredefinedMachineType;
}
