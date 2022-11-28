import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAssignedTargetingOptionsRequestInput } from "./createassignedtargetingoptionsrequest";
import { DeleteAssignedTargetingOptionsRequest } from "./deleteassignedtargetingoptionsrequest";



// BulkEditAssignedTargetingOptionsRequestInput
/** 
 * Request message for BulkEditLineItemsAssignedTargetingOptions.
**/
export class BulkEditAssignedTargetingOptionsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createRequests", elemType: CreateAssignedTargetingOptionsRequestInput })
  createRequests?: CreateAssignedTargetingOptionsRequestInput[];

  @SpeakeasyMetadata({ data: "json, name=deleteRequests", elemType: DeleteAssignedTargetingOptionsRequest })
  deleteRequests?: DeleteAssignedTargetingOptionsRequest[];

  @SpeakeasyMetadata({ data: "json, name=lineItemIds" })
  lineItemIds?: string[];
}
