import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OsPolicyAssignmentInstanceFilterInventory
/** 
 * VM inventory details.
**/
export class OsPolicyAssignmentInstanceFilterInventory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=osShortName" })
  osShortName?: string;

  @SpeakeasyMetadata({ data: "json, name=osVersion" })
  osVersion?: string;
}
