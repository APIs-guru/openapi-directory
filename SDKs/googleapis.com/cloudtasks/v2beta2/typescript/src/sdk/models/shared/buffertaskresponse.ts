import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";



// BufferTaskResponse
/** 
 * Response message for BufferTask.
**/
export class BufferTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=task" })
  task?: Task;
}
