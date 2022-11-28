import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedTargetingOption } from "./assignedtargetingoption";
/**
 * Response message for ListCampaignAssignedTargetingOptions.
**/
export declare class ListCampaignAssignedTargetingOptionsResponse extends SpeakeasyBase {
    assignedTargetingOptions?: AssignedTargetingOption[];
    nextPageToken?: string;
}
