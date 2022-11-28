import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAssignedTargetingOptionsRequestInput } from "./createassignedtargetingoptionsrequest";
import { DeleteAssignedTargetingOptionsRequest } from "./deleteassignedtargetingoptionsrequest";
/**
 * Request message for BulkEditLineItemAssignedTargetingOptions.
**/
export declare class BulkEditLineItemAssignedTargetingOptionsRequestInput extends SpeakeasyBase {
    createRequests?: CreateAssignedTargetingOptionsRequestInput[];
    deleteRequests?: DeleteAssignedTargetingOptionsRequest[];
}
