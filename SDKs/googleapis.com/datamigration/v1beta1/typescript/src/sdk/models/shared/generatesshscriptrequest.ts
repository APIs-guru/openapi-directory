import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VmCreationConfig } from "./vmcreationconfig";
import { VmSelectionConfig } from "./vmselectionconfig";



// GenerateSshScriptRequest
/** 
 * Request message for 'GenerateSshScript' request.
**/
export class GenerateSshScriptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vm" })
  vm?: string;

  @SpeakeasyMetadata({ data: "json, name=vmCreationConfig" })
  vmCreationConfig?: VmCreationConfig;

  @SpeakeasyMetadata({ data: "json, name=vmPort" })
  vmPort?: number;

  @SpeakeasyMetadata({ data: "json, name=vmSelectionConfig" })
  vmSelectionConfig?: VmSelectionConfig;
}
