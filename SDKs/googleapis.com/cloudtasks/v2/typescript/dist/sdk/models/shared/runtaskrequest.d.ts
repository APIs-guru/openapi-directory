import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RunTaskRequestResponseViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
/**
 * Request message for forcing a task to run now using RunTask.
**/
export declare class RunTaskRequest extends SpeakeasyBase {
    responseView?: RunTaskRequestResponseViewEnum;
}
