import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcknowledgeTaskRequest
/** 
 * Request message for acknowledging a task using AcknowledgeTask.
**/
export class AcknowledgeTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;
}
