import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LineItemAssignedTargetingOption } from "./lineitemassignedtargetingoption";



export class BulkListAssignedTargetingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineItemAssignedTargetingOptions", elemType: LineItemAssignedTargetingOption })
  lineItemAssignedTargetingOptions?: LineItemAssignedTargetingOption[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
