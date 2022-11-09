import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LineItemAssignedTargetingOption } from "./lineitemassignedtargetingoption";


export class BulkListAssignedTargetingOptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineItemAssignedTargetingOptions", elemType: shared.LineItemAssignedTargetingOption })
  lineItemAssignedTargetingOptions?: LineItemAssignedTargetingOption[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
