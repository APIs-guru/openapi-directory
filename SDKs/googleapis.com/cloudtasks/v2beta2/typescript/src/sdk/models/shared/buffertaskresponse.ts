import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Task } from "./task";


// BufferTaskResponse
/** 
 * Response message for BufferTask.
**/
export class BufferTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=task" })
  task?: Task;
}
