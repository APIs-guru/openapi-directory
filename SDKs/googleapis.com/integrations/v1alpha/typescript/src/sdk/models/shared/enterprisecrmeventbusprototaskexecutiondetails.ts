import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats } from "./enterprisecrmeventbusprototaskexecutiondetailstaskattemptstats";


export enum EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum {
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


// EnterpriseCrmEventbusProtoTaskExecutionDetails
/** 
 * Contains the details of the execution of this task. Next available id: 11
**/
export class EnterpriseCrmEventbusProtoTaskExecutionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskAttemptStats", elemType: EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats })
  taskAttemptStats?: EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats[];

  @SpeakeasyMetadata({ data: "json, name=taskExecutionState" })
  taskExecutionState?: EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=taskNumber" })
  taskNumber?: string;
}
