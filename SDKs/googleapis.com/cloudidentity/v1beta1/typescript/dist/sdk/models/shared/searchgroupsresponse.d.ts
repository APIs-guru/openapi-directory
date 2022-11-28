import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
/**
 * The response message for GroupsService.SearchGroups.
**/
export declare class SearchGroupsResponse extends SpeakeasyBase {
    groups?: Group[];
    nextPageToken?: string;
}
