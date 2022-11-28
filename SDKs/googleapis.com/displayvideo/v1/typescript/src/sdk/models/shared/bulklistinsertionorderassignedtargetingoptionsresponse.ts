import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignedTargetingOption } from "./assignedtargetingoption";



// BulkListInsertionOrderAssignedTargetingOptionsResponse
/** 
 * Response message for BulkListInsertionOrderAssignedTargetingOptions.
**/
export class BulkListInsertionOrderAssignedTargetingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignedTargetingOptions", elemType: AssignedTargetingOption })
  assignedTargetingOptions?: AssignedTargetingOption[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
