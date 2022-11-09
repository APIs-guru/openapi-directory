import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Task } from "./task";


// LeaseTasksResponse
/** 
 * Response message for leasing tasks using LeaseTasks.
**/
export class LeaseTasksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=tasks", elemType: shared.Task })
  tasks?: Task[];
}
