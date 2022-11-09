import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TargetingOption } from "./targetingoption";


// SearchTargetingOptionsResponse
/** 
 * Response message for SearchTargetingOptions.
**/
export class SearchTargetingOptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=targetingOptions", elemType: shared.TargetingOption })
  targetingOptions?: TargetingOption[];
}
