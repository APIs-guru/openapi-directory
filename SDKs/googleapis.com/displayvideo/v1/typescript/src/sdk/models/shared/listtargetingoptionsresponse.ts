import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetingOption } from "./targetingoption";



// ListTargetingOptionsResponse
/** 
 * Response message for ListTargetingOptions.
**/
export class ListTargetingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=targetingOptions", elemType: TargetingOption })
  targetingOptions?: TargetingOption[];
}
