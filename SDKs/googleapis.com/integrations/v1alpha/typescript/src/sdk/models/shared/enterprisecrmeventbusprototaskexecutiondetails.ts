import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats } from "./enterprisecrmeventbusprototaskexecutiondetailstaskattemptstats";

export enum EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum {
    Unspecified = "UNSPECIFIED"
,    PendingExecution = "PENDING_EXECUTION"
,    InProcess = "IN_PROCESS"
,    Succeed = "SUCCEED"
,    Failed = "FAILED"
,    Fatal = "FATAL"
,    RetryOnHold = "RETRY_ON_HOLD"
,    Skipped = "SKIPPED"
,    Canceled = "CANCELED"
,    PendingRollback = "PENDING_ROLLBACK"
,    RollbackInProcess = "ROLLBACK_IN_PROCESS"
,    Rolledback = "ROLLEDBACK"
,    Suspended = "SUSPENDED"
}


// EnterpriseCrmEventbusProtoTaskExecutionDetails
/** 
 * Contains the details of the execution of this task. Next available id: 11
**/
export class EnterpriseCrmEventbusProtoTaskExecutionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=taskAttemptStats", elemType: shared.EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats })
  taskAttemptStats?: EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats[];

  @Metadata({ data: "json, name=taskExecutionState" })
  taskExecutionState?: EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionStateEnum;

  @Metadata({ data: "json, name=taskNumber" })
  taskNumber?: string;
}
