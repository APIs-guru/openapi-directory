import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AcknowledgeTaskRequest
/** 
 * Request message for acknowledging a task using AcknowledgeTask.
**/
export class AcknowledgeTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;
}
