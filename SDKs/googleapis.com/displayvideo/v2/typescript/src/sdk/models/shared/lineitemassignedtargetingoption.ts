import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignedTargetingOption } from "./assignedtargetingoption";



// LineItemAssignedTargetingOption
/** 
 * Wrapper object associating an assigned_targeting_option resource and the line item it is assigned to.
**/
export class LineItemAssignedTargetingOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignedTargetingOption" })
  assignedTargetingOption?: AssignedTargetingOption;

  @SpeakeasyMetadata({ data: "json, name=lineItemId" })
  lineItemId?: string;
}
