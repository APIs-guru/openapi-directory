import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PredefinedMachineType
/** 
 * Specification of a predefined machine type.
**/
export class PredefinedMachineType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;
}
