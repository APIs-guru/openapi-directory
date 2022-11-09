import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Task } from "./task";


// ListTasksResponse
/** 
 * Response message for listing tasks using ListTasks.
**/
export class ListTasksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tasks", elemType: shared.Task })
  tasks?: Task[];
}
