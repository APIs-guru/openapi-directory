import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TargetingOption } from "./targetingoption";


// ListTargetingOptionsResponse
/** 
 * Response message for ListTargetingOptions.
**/
export class ListTargetingOptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=targetingOptions", elemType: shared.TargetingOption })
  targetingOptions?: TargetingOption[];
}
