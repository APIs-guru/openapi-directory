import { SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";
import { ListMeta } from "./listmeta";
/**
 * ListTasksResponse is a list of Tasks resources.
**/
export declare class ListTasksResponse extends SpeakeasyBase {
    apiVersion?: string;
    items?: Task[];
    kind?: string;
    metadata?: ListMeta;
    unreachable?: string[];
}
