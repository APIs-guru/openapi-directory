import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum JobMessageMessageImportanceEnum {
    JobMessageImportanceUnknown = "JOB_MESSAGE_IMPORTANCE_UNKNOWN",
    JobMessageDebug = "JOB_MESSAGE_DEBUG",
    JobMessageDetailed = "JOB_MESSAGE_DETAILED",
    JobMessageBasic = "JOB_MESSAGE_BASIC",
    JobMessageWarning = "JOB_MESSAGE_WARNING",
    JobMessageError = "JOB_MESSAGE_ERROR"
}


// JobMessage
/** 
 * A particular message pertaining to a Dataflow job.
**/
export class JobMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=messageImportance" })
  messageImportance?: JobMessageMessageImportanceEnum;

  @SpeakeasyMetadata({ data: "json, name=messageText" })
  messageText?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;
}
