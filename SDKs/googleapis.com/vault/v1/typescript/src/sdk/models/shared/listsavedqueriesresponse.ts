import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SavedQuery } from "./savedquery";


// ListSavedQueriesResponse
/** 
 * Definition of the response for method ListSaveQuery.
**/
export class ListSavedQueriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=savedQueries", elemType: shared.SavedQuery })
  savedQueries?: SavedQuery[];
}
