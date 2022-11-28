import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";



// SearchDirectoryPeopleResponse
/** 
 * The response to a request for people in the authenticated user's domain directory that match the specified query.
**/
export class SearchDirectoryPeopleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=people", elemType: Person })
  people?: Person[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
