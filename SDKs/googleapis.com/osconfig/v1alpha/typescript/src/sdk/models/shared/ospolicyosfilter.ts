import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OsPolicyOsFilter
/** 
 * Filtering criteria to select VMs based on OS details.
**/
export class OsPolicyOsFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=osShortName" })
  osShortName?: string;

  @Metadata({ data: "json, name=osVersion" })
  osVersion?: string;
}
