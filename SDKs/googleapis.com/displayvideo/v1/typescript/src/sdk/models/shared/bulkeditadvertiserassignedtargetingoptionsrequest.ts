import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAssignedTargetingOptionsRequestInput } from "./createassignedtargetingoptionsrequest";
import { DeleteAssignedTargetingOptionsRequest } from "./deleteassignedtargetingoptionsrequest";



// BulkEditAdvertiserAssignedTargetingOptionsRequestInput
/** 
 * Request message for BulkEditAdvertiserAssignedTargetingOptions.
**/
export class BulkEditAdvertiserAssignedTargetingOptionsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createRequests", elemType: CreateAssignedTargetingOptionsRequestInput })
  createRequests?: CreateAssignedTargetingOptionsRequestInput[];

  @SpeakeasyMetadata({ data: "json, name=deleteRequests", elemType: DeleteAssignedTargetingOptionsRequest })
  deleteRequests?: DeleteAssignedTargetingOptionsRequest[];
}
