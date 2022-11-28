import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";



// ListDirectoryPeopleResponse
/** 
 * The response to a request for the authenticated user's domain directory.
**/
export class ListDirectoryPeopleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=nextSyncToken" })
  nextSyncToken?: string;

  @SpeakeasyMetadata({ data: "json, name=people", elemType: Person })
  people?: Person[];
}
