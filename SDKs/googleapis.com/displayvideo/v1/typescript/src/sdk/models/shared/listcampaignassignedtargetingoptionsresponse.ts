import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignedTargetingOption } from "./assignedtargetingoption";



// ListCampaignAssignedTargetingOptionsResponse
/** 
 * Response message for ListCampaignAssignedTargetingOptions.
**/
export class ListCampaignAssignedTargetingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignedTargetingOptions", elemType: AssignedTargetingOption })
  assignedTargetingOptions?: AssignedTargetingOption[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
