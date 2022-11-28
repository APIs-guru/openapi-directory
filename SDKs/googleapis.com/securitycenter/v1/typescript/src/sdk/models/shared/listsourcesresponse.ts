import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";



// ListSourcesResponse
/** 
 * Response message for listing sources.
**/
export class ListSourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: Source })
  sources?: Source[];
}
