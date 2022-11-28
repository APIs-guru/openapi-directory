import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OsPolicyOsFilter
/** 
 * Filtering criteria to select VMs based on OS details.
**/
export class OsPolicyOsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=osShortName" })
  osShortName?: string;

  @SpeakeasyMetadata({ data: "json, name=osVersion" })
  osVersion?: string;
}
