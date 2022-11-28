import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";



// LeaseTasksResponse
/** 
 * Response message for leasing tasks using LeaseTasks.
**/
export class LeaseTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: Task })
  tasks?: Task[];
}
