import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PredefinedMachineType
/** 
 * Specification of a predefined machine type.
**/
export class PredefinedMachineType extends SpeakeasyBase {
  @Metadata({ data: "json, name=machineType" })
  machineType?: string;
}
