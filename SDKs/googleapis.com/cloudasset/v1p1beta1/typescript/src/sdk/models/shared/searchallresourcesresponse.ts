import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StandardResourceMetadata } from "./standardresourcemetadata";


// SearchAllResourcesResponse
/** 
 * Search all resources response.
**/
export class SearchAllResourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=results", elemType: shared.StandardResourceMetadata })
  results?: StandardResourceMetadata[];
}
