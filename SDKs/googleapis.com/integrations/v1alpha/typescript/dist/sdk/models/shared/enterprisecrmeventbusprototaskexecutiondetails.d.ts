import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats } from "./enterprisecrmeventbusprototaskexecutiondetailstaskattemptstats";
export declare enum EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum {
    Unspecified = "UNSPECIFIED",
    PendingExecution = "PENDING_EXECUTION",
    InProcess = "IN_PROCESS",
    Succeed = "SUCCEED",
    Failed = "FAILED",
    Fatal = "FATAL",
    RetryOnHold = "RETRY_ON_HOLD",
    Skipped = "SKIPPED",
    Canceled = "CANCELED",
    PendingRollback = "PENDING_ROLLBACK",
    RollbackInProcess = "ROLLBACK_IN_PROCESS",
    Rolledback = "ROLLEDBACK",
    Suspended = "SUSPENDED"
}
/**
 * Contains the details of the execution of this task. Next available id: 11
**/
export declare class EnterpriseCrmEventbusProtoTaskExecutionDetails extends SpeakeasyBase {
    taskAttemptStats?: EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats[];
    taskExecutionState?: EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum;
    taskNumber?: string;
}
