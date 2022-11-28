import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
/**
 * The ListGroups response.
**/
export declare class ListGroupsResponse extends SpeakeasyBase {
    group?: Group[];
    nextPageToken?: string;
}
