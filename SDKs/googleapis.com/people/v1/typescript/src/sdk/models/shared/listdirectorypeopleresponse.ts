import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Person } from "./person";


// ListDirectoryPeopleResponse
/** 
 * The response to a request for the authenticated user's domain directory.
**/
export class ListDirectoryPeopleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=nextSyncToken" })
  nextSyncToken?: string;

  @Metadata({ data: "json, name=people", elemType: shared.Person })
  people?: Person[];
}
