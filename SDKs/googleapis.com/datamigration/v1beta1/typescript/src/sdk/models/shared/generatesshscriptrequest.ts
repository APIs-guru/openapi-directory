import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VmCreationConfig } from "./vmcreationconfig";
import { VmSelectionConfig } from "./vmselectionconfig";


// GenerateSshScriptRequest
/** 
 * Request message for 'GenerateSshScript' request.
**/
export class GenerateSshScriptRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=vm" })
  vm?: string;

  @Metadata({ data: "json, name=vmCreationConfig" })
  vmCreationConfig?: VmCreationConfig;

  @Metadata({ data: "json, name=vmPort" })
  vmPort?: number;

  @Metadata({ data: "json, name=vmSelectionConfig" })
  vmSelectionConfig?: VmSelectionConfig;
}
