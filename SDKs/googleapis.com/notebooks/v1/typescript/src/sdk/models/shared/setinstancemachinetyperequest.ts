import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SetInstanceMachineTypeRequest
/** 
 * Request for setting instance machine type.
**/
export class SetInstanceMachineTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;
}
