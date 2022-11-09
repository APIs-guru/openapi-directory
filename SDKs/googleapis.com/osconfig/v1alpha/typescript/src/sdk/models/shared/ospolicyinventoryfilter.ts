import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OsPolicyInventoryFilter
/** 
 * Filtering criteria to select VMs based on inventory details.
**/
export class OsPolicyInventoryFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=osShortName" })
  osShortName?: string;

  @Metadata({ data: "json, name=osVersion" })
  osVersion?: string;
}
