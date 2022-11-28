import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAssignedTargetingOptionsRequestInput } from "./createassignedtargetingoptionsrequest";
import { DeleteAssignedTargetingOptionsRequest } from "./deleteassignedtargetingoptionsrequest";



// BulkEditLineItemAssignedTargetingOptionsRequestInput
/** 
 * Request message for BulkEditLineItemAssignedTargetingOptions.
**/
export class BulkEditLineItemAssignedTargetingOptionsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createRequests", elemType: CreateAssignedTargetingOptionsRequestInput })
  createRequests?: CreateAssignedTargetingOptionsRequestInput[];

  @SpeakeasyMetadata({ data: "json, name=deleteRequests", elemType: DeleteAssignedTargetingOptionsRequest })
  deleteRequests?: DeleteAssignedTargetingOptionsRequest[];
}
