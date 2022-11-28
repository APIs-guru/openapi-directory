import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceSearchResult } from "./resourcesearchresult";



// SearchAllResourcesResponse
/** 
 * Search all resources response.
**/
export class SearchAllResourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ResourceSearchResult })
  results?: ResourceSearchResult[];
}
