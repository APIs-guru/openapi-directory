import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedTargetingOption } from "./assignedtargetingoption";
/**
 * Response message for ListLineItemAssignedTargetingOptions.
**/
export declare class ListLineItemAssignedTargetingOptionsResponse extends SpeakeasyBase {
    assignedTargetingOptions?: AssignedTargetingOption[];
    nextPageToken?: string;
}
