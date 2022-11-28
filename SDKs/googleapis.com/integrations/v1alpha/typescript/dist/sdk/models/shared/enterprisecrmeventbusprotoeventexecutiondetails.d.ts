import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats } from "./enterprisecrmeventbusprotoeventexecutiondetailseventattemptstats";
import { EnterpriseCrmEventbusProtoEventExecutionSnapshot } from "./enterprisecrmeventbusprotoeventexecutionsnapshot";
export declare enum EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum {
    Unspecified = "UNSPECIFIED",
    OnHold = "ON_HOLD",
    InProcess = "IN_PROCESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Canceled = "CANCELED",
    RetryOnHold = "RETRY_ON_HOLD",
    Suspended = "SUSPENDED"
}
/**
 * Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10
**/
export declare class EnterpriseCrmEventbusProtoEventExecutionDetails extends SpeakeasyBase {
    eventAttemptStats?: EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats[];
    eventExecutionSnapshot?: EnterpriseCrmEventbusProtoEventExecutionSnapshot[];
    eventExecutionState?: EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionStateEnum;
    eventRetriesFromBeginningCount?: number;
    logFilePath?: string;
    networkAddress?: string;
    nextExecutionTime?: string;
    ryeLockUnheldCount?: number;
}
