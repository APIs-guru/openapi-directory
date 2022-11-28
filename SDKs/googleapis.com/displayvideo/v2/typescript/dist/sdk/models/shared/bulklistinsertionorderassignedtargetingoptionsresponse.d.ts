import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedTargetingOption } from "./assignedtargetingoption";
/**
 * Response message for BulkListInsertionOrderAssignedTargetingOptions.
**/
export declare class BulkListInsertionOrderAssignedTargetingOptionsResponse extends SpeakeasyBase {
    assignedTargetingOptions?: AssignedTargetingOption[];
    nextPageToken?: string;
}
