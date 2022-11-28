import { SpeakeasyBase } from "../../../internal/utils";
import { Person } from "./person";
/**
 * The response to a request for people in the authenticated user's domain directory that match the specified query.
**/
export declare class SearchDirectoryPeopleResponse extends SpeakeasyBase {
    nextPageToken?: string;
    people?: Person[];
    totalSize?: number;
}
