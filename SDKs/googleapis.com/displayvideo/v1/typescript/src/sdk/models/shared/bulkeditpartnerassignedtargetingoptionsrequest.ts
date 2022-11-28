import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreateAssignedTargetingOptionsRequestInput } from "./createassignedtargetingoptionsrequest";
import { DeleteAssignedTargetingOptionsRequest } from "./deleteassignedtargetingoptionsrequest";



// BulkEditPartnerAssignedTargetingOptionsRequestInput
/** 
 * Request message for BulkEditPartnerAssignedTargetingOptions.
**/
export class BulkEditPartnerAssignedTargetingOptionsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createRequests", elemType: CreateAssignedTargetingOptionsRequestInput })
  createRequests?: CreateAssignedTargetingOptionsRequestInput[];

  @SpeakeasyMetadata({ data: "json, name=deleteRequests", elemType: DeleteAssignedTargetingOptionsRequest })
  deleteRequests?: DeleteAssignedTargetingOptionsRequest[];
}
