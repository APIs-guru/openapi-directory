import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OsPolicyInventoryFilter
/** 
 * Filtering criteria to select VMs based on inventory details.
**/
export class OsPolicyInventoryFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=osShortName" })
  osShortName?: string;

  @SpeakeasyMetadata({ data: "json, name=osVersion" })
  osVersion?: string;
}
