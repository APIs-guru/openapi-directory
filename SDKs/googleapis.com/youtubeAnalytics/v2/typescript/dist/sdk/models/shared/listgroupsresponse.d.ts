import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { Group } from "./group";
/**
 * Response message for GroupsService.ListGroups.
**/
export declare class ListGroupsResponse extends SpeakeasyBase {
    errors?: Errors;
    etag?: string;
    items?: Group[];
    kind?: string;
    nextPageToken?: string;
}
