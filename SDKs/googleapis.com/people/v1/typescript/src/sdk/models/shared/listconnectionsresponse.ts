import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Person } from "./person";


// ListConnectionsResponse
/** 
 * The response to a request for the authenticated user's connections.
**/
export class ListConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections", elemType: shared.Person })
  connections?: Person[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=nextSyncToken" })
  nextSyncToken?: string;

  @Metadata({ data: "json, name=totalItems" })
  totalItems?: number;

  @Metadata({ data: "json, name=totalPeople" })
  totalPeople?: number;
}
