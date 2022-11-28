import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactGroup } from "./contactgroup";



// ListContactGroupsResponse
/** 
 * The response to a list contact groups request.
**/
export class ListContactGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactGroups", elemType: ContactGroup })
  contactGroups?: ContactGroup[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=nextSyncToken" })
  nextSyncToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalItems" })
  totalItems?: number;
}
