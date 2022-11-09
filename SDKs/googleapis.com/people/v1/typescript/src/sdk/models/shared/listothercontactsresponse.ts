import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Person } from "./person";


// ListOtherContactsResponse
/** 
 * The response to a request for the authenticated user's "Other contacts".
**/
export class ListOtherContactsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=nextSyncToken" })
  nextSyncToken?: string;

  @Metadata({ data: "json, name=otherContacts", elemType: shared.Person })
  otherContacts?: Person[];

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
