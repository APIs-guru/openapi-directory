import { SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";
export declare enum CreateTaskRequestResponseViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
/**
 * Request message for CreateTask.
**/
export declare class CreateTaskRequest extends SpeakeasyBase {
    responseView?: CreateTaskRequestResponseViewEnum;
    task?: Task;
}
