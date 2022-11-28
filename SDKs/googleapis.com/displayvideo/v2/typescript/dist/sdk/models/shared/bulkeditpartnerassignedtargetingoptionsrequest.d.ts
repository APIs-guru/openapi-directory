import { SpeakeasyBase } from "../../../internal/utils";
import { CreateAssignedTargetingOptionsRequestInput } from "./createassignedtargetingoptionsrequest";
import { DeleteAssignedTargetingOptionsRequest } from "./deleteassignedtargetingoptionsrequest";
/**
 * Request message for BulkEditPartnerAssignedTargetingOptions.
**/
export declare class BulkEditPartnerAssignedTargetingOptionsRequestInput extends SpeakeasyBase {
    createRequests?: CreateAssignedTargetingOptionsRequestInput[];
    deleteRequests?: DeleteAssignedTargetingOptionsRequest[];
}
