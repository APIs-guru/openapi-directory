import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssignedTargetingOption } from "./assignedtargetingoption";


export class BulkEditAdvertiserAssignedTargetingOptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAssignedTargetingOptions", elemType: shared.AssignedTargetingOption })
  createdAssignedTargetingOptions?: AssignedTargetingOption[];
}
