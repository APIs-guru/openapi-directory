import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssignedTargetingOption } from "./assignedtargetingoption";



export class BulkEditLineItemAssignedTargetingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAssignedTargetingOptions", elemType: AssignedTargetingOption })
  createdAssignedTargetingOptions?: AssignedTargetingOption[];
}
