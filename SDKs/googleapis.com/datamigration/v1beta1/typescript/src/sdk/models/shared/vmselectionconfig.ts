import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VmSelectionConfig
/** 
 * VM selection configuration message
**/
export class VmSelectionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vmZone" })
  vmZone?: string;
}
