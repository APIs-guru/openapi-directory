import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VmCreationConfig
/** 
 * VM creation configuration message
**/
export class VmCreationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=subnet" })
  subnet?: string;

  @Metadata({ data: "json, name=vmMachineType" })
  vmMachineType?: string;

  @Metadata({ data: "json, name=vmZone" })
  vmZone?: string;
}
