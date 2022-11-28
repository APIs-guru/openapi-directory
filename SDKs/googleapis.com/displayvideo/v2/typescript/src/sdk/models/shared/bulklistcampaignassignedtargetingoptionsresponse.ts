import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignedTargetingOption } from "./assignedtargetingoption";



// BulkListCampaignAssignedTargetingOptionsResponse
/** 
 * Response message for BulkListCampaignAssignedTargetingOptions.
**/
export class BulkListCampaignAssignedTargetingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignedTargetingOptions", elemType: AssignedTargetingOption })
  assignedTargetingOptions?: AssignedTargetingOption[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
