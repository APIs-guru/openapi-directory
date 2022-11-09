import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SetInstanceMachineTypeRequest
/** 
 * Request for setting instance machine type.
**/
export class SetInstanceMachineTypeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=machineType" })
  machineType?: string;
}
