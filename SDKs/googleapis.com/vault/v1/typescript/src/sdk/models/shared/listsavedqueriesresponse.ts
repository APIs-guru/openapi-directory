import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SavedQuery } from "./savedquery";



// ListSavedQueriesResponse
/** 
 * Definition of the response for method ListSaveQuery.
**/
export class ListSavedQueriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=savedQueries", elemType: SavedQuery })
  savedQueries?: SavedQuery[];
}
