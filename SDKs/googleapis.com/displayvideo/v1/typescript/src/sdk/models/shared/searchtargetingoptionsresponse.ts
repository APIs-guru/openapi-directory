import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetingOption } from "./targetingoption";



// SearchTargetingOptionsResponse
/** 
 * Response message for SearchTargetingOptions.
**/
export class SearchTargetingOptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=targetingOptions", elemType: TargetingOption })
  targetingOptions?: TargetingOption[];
}
