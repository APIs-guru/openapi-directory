import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Person } from "./person";


// SearchDirectoryPeopleResponse
/** 
 * The response to a request for people in the authenticated user's domain directory that match the specified query.
**/
export class SearchDirectoryPeopleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=people", elemType: shared.Person })
  people?: Person[];

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
