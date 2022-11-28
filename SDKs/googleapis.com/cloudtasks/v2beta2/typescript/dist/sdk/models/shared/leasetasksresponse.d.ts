import { SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";
/**
 * Response message for leasing tasks using LeaseTasks.
**/
export declare class LeaseTasksResponse extends SpeakeasyBase {
    tasks?: Task[];
}
