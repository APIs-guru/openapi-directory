import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssignedTargetingOption } from "./assignedtargetingoption";


export class BulkListLineItemAssignedTargetingOptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignedTargetingOptions", elemType: shared.AssignedTargetingOption })
  assignedTargetingOptions?: AssignedTargetingOption[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
