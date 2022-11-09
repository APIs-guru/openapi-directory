import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OsPolicyAssignmentInstanceFilterInventory
/** 
 * VM inventory details.
**/
export class OsPolicyAssignmentInstanceFilterInventory extends SpeakeasyBase {
  @Metadata({ data: "json, name=osShortName" })
  osShortName?: string;

  @Metadata({ data: "json, name=osVersion" })
  osVersion?: string;
}
