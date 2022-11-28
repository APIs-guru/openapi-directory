import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAssignedTargetingOptionsRequestInput } from "./createassignedtargetingoptionsrequest";
import { DeleteAssignedTargetingOptionsRequest } from "./deleteassignedtargetingoptionsrequest";
/**
 * Request message for BulkEditAdvertiserAssignedTargetingOptions.
**/
export declare class BulkEditAdvertiserAssignedTargetingOptionsRequestInput extends SpeakeasyBase {
    createRequests?: CreateAssignedTargetingOptionsRequestInput[];
    deleteRequests?: DeleteAssignedTargetingOptionsRequest[];
}
