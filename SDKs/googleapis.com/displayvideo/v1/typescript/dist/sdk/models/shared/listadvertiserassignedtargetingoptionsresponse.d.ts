import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedTargetingOption } from "./assignedtargetingoption";
/**
 * Response message for ListAdvertiserAssignedTargetingOptions.
**/
export declare class ListAdvertiserAssignedTargetingOptionsResponse extends SpeakeasyBase {
    assignedTargetingOptions?: AssignedTargetingOption[];
    nextPageToken?: string;
}
