import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Query } from "./query";



// ListQueriesResponse
/** 
 * List queries response.
**/
export class ListQueriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=queries", elemType: Query })
  queries?: Query[];
}
