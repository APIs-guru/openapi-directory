import { SpeakeasyBase } from "../../../internal/utils";
export declare enum JobMessageMessageImportanceEnum {
    JobMessageImportanceUnknown = "JOB_MESSAGE_IMPORTANCE_UNKNOWN",
    JobMessageDebug = "JOB_MESSAGE_DEBUG",
    JobMessageDetailed = "JOB_MESSAGE_DETAILED",
    JobMessageBasic = "JOB_MESSAGE_BASIC",
    JobMessageWarning = "JOB_MESSAGE_WARNING",
    JobMessageError = "JOB_MESSAGE_ERROR"
}
/**
 * A particular message pertaining to a Dataflow job.
**/
export declare class JobMessage extends SpeakeasyBase {
    id?: string;
    messageImportance?: JobMessageMessageImportanceEnum;
    messageText?: string;
    time?: string;
}
