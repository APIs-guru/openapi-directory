import { SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";
/**
 * The response to a request for the authenticated user's connections.
**/
export declare class ListConnectionsResponse extends SpeakeasyBase {
    connections?: Person[];
    nextPageToken?: string;
    nextSyncToken?: string;
    totalItems?: number;
    totalPeople?: number;
}
