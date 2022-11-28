import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";



// ListOtherContactsResponse
/** 
 * The response to a request for the authenticated user's "Other contacts".
**/
export class ListOtherContactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=nextSyncToken" })
  nextSyncToken?: string;

  @SpeakeasyMetadata({ data: "json, name=otherContacts", elemType: Person })
  otherContacts?: Person[];

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
