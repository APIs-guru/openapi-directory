import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StandardResourceMetadata } from "./standardresourcemetadata";



// SearchAllResourcesResponse
/** 
 * Search all resources response.
**/
export class SearchAllResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: StandardResourceMetadata })
  results?: StandardResourceMetadata[];
}
