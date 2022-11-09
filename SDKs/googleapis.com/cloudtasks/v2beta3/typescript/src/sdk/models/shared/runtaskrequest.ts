import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RunTaskRequestResponseViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED"
,    Basic = "BASIC"
,    Full = "FULL"
}


// RunTaskRequest
/** 
 * Request message for forcing a task to run now using RunTask.
**/
export class RunTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=responseView" })
  responseView?: RunTaskRequestResponseViewEnum;
}
