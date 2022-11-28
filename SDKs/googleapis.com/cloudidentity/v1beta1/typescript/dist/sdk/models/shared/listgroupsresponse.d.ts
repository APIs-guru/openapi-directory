import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
/**
 * The response message for GroupsService.ListGroups.
**/
export declare class ListGroupsResponse extends SpeakeasyBase {
    groups?: Group[];
    nextPageToken?: string;
}
