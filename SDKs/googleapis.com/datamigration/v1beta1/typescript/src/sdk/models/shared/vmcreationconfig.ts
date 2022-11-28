import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VmCreationConfig
/** 
 * VM creation configuration message
**/
export class VmCreationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet?: string;

  @SpeakeasyMetadata({ data: "json, name=vmMachineType" })
  vmMachineType?: string;

  @SpeakeasyMetadata({ data: "json, name=vmZone" })
  vmZone?: string;
}
