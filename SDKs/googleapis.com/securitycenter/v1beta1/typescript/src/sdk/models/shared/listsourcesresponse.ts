import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Source } from "./source";


// ListSourcesResponse
/** 
 * Response message for listing sources.
**/
export class ListSourcesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=sources", elemType: shared.Source })
  sources?: Source[];
}
