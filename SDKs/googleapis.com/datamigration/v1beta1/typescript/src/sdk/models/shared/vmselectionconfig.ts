import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VmSelectionConfig
/** 
 * VM selection configuration message
**/
export class VmSelectionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=vmZone" })
  vmZone?: string;
}
