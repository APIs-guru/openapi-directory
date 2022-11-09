import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SavedQuery } from "./savedquery";
/**
 * Definition of the response for method ListSaveQuery.
**/
export declare class ListSavedQueriesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    savedQueries?: SavedQuery[];
}
