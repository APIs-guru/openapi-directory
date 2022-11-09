import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QuerySource } from "./querysource";


// ListQuerySourcesResponse
/** 
 * List sources response.
**/
export class ListQuerySourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=sources", elemType: shared.QuerySource })
  sources?: QuerySource[];
}
