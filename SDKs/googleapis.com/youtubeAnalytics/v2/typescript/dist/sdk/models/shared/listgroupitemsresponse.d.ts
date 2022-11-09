import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Errors } from "./errors";
import { GroupItem } from "./groupitem";
/**
 * Response message for GroupsService.ListGroupItems.
**/
export declare class ListGroupItemsResponse extends SpeakeasyBase {
    errors?: Errors;
    etag?: string;
    items?: GroupItem[];
    kind?: string;
}
