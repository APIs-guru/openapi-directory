import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";



// ListTasksResponse
/** 
 * Response message for listing tasks using ListTasks.
**/
export class ListTasksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tasks", elemType: Task })
  tasks?: Task[];
}
