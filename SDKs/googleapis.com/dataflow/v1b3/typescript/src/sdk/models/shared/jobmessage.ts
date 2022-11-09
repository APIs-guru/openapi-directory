import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum JobMessageMessageImportanceEnum {
    JobMessageImportanceUnknown = "JOB_MESSAGE_IMPORTANCE_UNKNOWN"
,    JobMessageDebug = "JOB_MESSAGE_DEBUG"
,    JobMessageDetailed = "JOB_MESSAGE_DETAILED"
,    JobMessageBasic = "JOB_MESSAGE_BASIC"
,    JobMessageWarning = "JOB_MESSAGE_WARNING"
,    JobMessageError = "JOB_MESSAGE_ERROR"
}


// JobMessage
/** 
 * A particular message pertaining to a Dataflow job.
**/
export class JobMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=messageImportance" })
  messageImportance?: JobMessageMessageImportanceEnum;

  @Metadata({ data: "json, name=messageText" })
  messageText?: string;

  @Metadata({ data: "json, name=time" })
  time?: string;
}
