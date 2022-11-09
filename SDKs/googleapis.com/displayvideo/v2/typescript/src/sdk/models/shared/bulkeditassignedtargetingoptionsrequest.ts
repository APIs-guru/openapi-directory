import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CreateAssignedTargetingOptionsRequest } from "./createassignedtargetingoptionsrequest";
import { DeleteAssignedTargetingOptionsRequest } from "./deleteassignedtargetingoptionsrequest";


// BulkEditAssignedTargetingOptionsRequest
/** 
 * Request message for BulkEditLineItemsAssignedTargetingOptions.
**/
export class BulkEditAssignedTargetingOptionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=createRequests", elemType: shared.CreateAssignedTargetingOptionsRequest })
  createRequests?: CreateAssignedTargetingOptionsRequest[];

  @Metadata({ data: "json, name=deleteRequests", elemType: shared.DeleteAssignedTargetingOptionsRequest })
  deleteRequests?: DeleteAssignedTargetingOptionsRequest[];

  @Metadata({ data: "json, name=lineItemIds" })
  lineItemIds?: string[];
}
