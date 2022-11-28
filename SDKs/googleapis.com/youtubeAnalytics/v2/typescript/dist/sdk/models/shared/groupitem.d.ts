import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { GroupItemResource } from "./groupitemresource";
/**
 * A group item.
**/
export declare class GroupItem extends SpeakeasyBase {
    errors?: Errors;
    etag?: string;
    groupId?: string;
    id?: string;
    kind?: string;
    resource?: GroupItemResource;
}
