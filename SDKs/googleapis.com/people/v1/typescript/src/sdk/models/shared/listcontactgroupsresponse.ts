import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContactGroup } from "./contactgroup";


// ListContactGroupsResponse
/** 
 * The response to a list contact groups request.
**/
export class ListContactGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactGroups", elemType: shared.ContactGroup })
  contactGroups?: ContactGroup[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=nextSyncToken" })
  nextSyncToken?: string;

  @Metadata({ data: "json, name=totalItems" })
  totalItems?: number;
}
