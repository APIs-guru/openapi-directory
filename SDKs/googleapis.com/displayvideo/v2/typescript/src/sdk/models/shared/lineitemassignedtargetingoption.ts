import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AssignedTargetingOption } from "./assignedtargetingoption";


// LineItemAssignedTargetingOption
/** 
 * Wrapper object associating an assigned_targeting_option resource and the line item it is assigned to.
**/
export class LineItemAssignedTargetingOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignedTargetingOption" })
  assignedTargetingOption?: AssignedTargetingOption;

  @Metadata({ data: "json, name=lineItemId" })
  lineItemId?: string;
}
