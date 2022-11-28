import { SpeakeasyBase } from "../../../internal/utils";
import { Client } from "./client";
import { Folder } from "./folder";
import { Tag } from "./tag";
import { Trigger } from "./trigger";
import { Variable } from "./variable";
export declare enum EntityChangeStatusEnum {
    ChangeStatusUnspecified = "changeStatusUnspecified",
    None = "none",
    Added = "added",
    Deleted = "deleted",
    Updated = "updated"
}
/**
 * A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace.
**/
export declare class Entity extends SpeakeasyBase {
    changeStatus?: EntityChangeStatusEnum;
    client?: Client;
    folder?: Folder;
    tag?: Tag;
    trigger?: Trigger;
    variable?: Variable;
}
