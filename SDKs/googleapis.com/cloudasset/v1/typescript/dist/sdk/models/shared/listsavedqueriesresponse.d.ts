import { SpeakeasyBase } from "../../../internal/utils";
import { SavedQuery } from "./savedquery";
/**
 * Response of listing saved queries.
**/
export declare class ListSavedQueriesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    savedQueries?: SavedQuery[];
}
