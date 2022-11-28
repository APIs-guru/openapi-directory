import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedTargetingOption } from "./assignedtargetingoption";
/**
 * Response message for ListInsertionOrderAssignedTargetingOptions.
**/
export declare class ListInsertionOrderAssignedTargetingOptionsResponse extends SpeakeasyBase {
    assignedTargetingOptions?: AssignedTargetingOption[];
    nextPageToken?: string;
}
