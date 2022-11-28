import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAssignedTargetingOptionsRequestInput } from "./createassignedtargetingoptionsrequest";
import { DeleteAssignedTargetingOptionsRequest } from "./deleteassignedtargetingoptionsrequest";
/**
 * Request message for BulkEditLineItemsAssignedTargetingOptions.
**/
export declare class BulkEditAssignedTargetingOptionsRequestInput extends SpeakeasyBase {
    createRequests?: CreateAssignedTargetingOptionsRequestInput[];
    deleteRequests?: DeleteAssignedTargetingOptionsRequest[];
    lineItemIds?: string[];
}
