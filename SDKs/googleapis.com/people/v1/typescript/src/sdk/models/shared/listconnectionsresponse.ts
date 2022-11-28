import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";



// ListConnectionsResponse
/** 
 * The response to a request for the authenticated user's connections.
**/
export class ListConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections", elemType: Person })
  connections?: Person[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=nextSyncToken" })
  nextSyncToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalItems" })
  totalItems?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPeople" })
  totalPeople?: number;
}
