import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";


export enum CreateTaskRequestResponseViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}


// CreateTaskRequest
/** 
 * Request message for CreateTask.
**/
export class CreateTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responseView" })
  responseView?: CreateTaskRequestResponseViewEnum;

  @SpeakeasyMetadata({ data: "json, name=task" })
  task?: Task;
}
