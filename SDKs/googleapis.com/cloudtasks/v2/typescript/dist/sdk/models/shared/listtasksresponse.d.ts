import { SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";
/**
 * Response message for listing tasks using ListTasks.
**/
export declare class ListTasksResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tasks?: Task[];
}
