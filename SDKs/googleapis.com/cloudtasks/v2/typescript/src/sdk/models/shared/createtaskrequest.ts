import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Task } from "./task";

export enum CreateTaskRequestResponseViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED"
,    Basic = "BASIC"
,    Full = "FULL"
}


// CreateTaskRequest
/** 
 * Request message for CreateTask.
**/
export class CreateTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=responseView" })
  responseView?: CreateTaskRequestResponseViewEnum;

  @Metadata({ data: "json, name=task" })
  task?: Task;
}
