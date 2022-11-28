import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuerySource } from "./querysource";



// ListQuerySourcesResponse
/** 
 * List sources response.
**/
export class ListQuerySourcesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: QuerySource })
  sources?: QuerySource[];
}
