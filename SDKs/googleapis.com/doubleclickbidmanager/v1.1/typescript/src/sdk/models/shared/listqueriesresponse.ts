import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Query } from "./query";


// ListQueriesResponse
/** 
 * List queries response.
**/
export class ListQueriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=queries", elemType: shared.Query })
  queries?: Query[];
}
