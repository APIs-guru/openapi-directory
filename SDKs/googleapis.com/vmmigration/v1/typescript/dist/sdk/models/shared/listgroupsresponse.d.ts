import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
/**
 * Response message for 'ListGroups' request.
**/
export declare class ListGroupsResponse extends SpeakeasyBase {
    groups?: Group[];
    nextPageToken?: string;
    unreachable?: string[];
}
