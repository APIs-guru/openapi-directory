import { SpeakeasyBase } from "../../../internal/utils";
import { ContactGroup } from "./contactgroup";
/**
 * The response to a list contact groups request.
**/
export declare class ListContactGroupsResponse extends SpeakeasyBase {
    contactGroups?: ContactGroup[];
    nextPageToken?: string;
    nextSyncToken?: string;
    totalItems?: number;
}
