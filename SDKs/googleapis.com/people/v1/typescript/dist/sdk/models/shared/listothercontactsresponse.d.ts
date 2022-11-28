import { SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";
/**
 * The response to a request for the authenticated user's "Other contacts".
**/
export declare class ListOtherContactsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    nextSyncToken?: string;
    otherContacts?: Person[];
    totalSize?: number;
}
