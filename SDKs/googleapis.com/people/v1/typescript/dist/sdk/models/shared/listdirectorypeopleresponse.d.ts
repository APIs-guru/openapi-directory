import { SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";
/**
 * The response to a request for the authenticated user's domain directory.
**/
export declare class ListDirectoryPeopleResponse extends SpeakeasyBase {
    nextPageToken?: string;
    nextSyncToken?: string;
    people?: Person[];
}
