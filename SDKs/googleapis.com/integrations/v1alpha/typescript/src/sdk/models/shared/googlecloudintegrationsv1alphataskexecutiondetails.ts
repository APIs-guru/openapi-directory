import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaAttemptStats } from "./googlecloudintegrationsv1alphaattemptstats";

export enum GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum {
    TaskExecutionStateUnspecified = "TASK_EXECUTION_STATE_UNSPECIFIED"
,    PendingExecution = "PENDING_EXECUTION"
,    InProcess = "IN_PROCESS"
,    Succeed = "SUCCEED"
,    Failed = "FAILED"
,    Fatal = "FATAL"
,    RetryOnHold = "RETRY_ON_HOLD"
,    Skipped = "SKIPPED"
,    Cancelled = "CANCELLED"
,    PendingRollback = "PENDING_ROLLBACK"
,    RollbackInProcess = "ROLLBACK_IN_PROCESS"
,    Rolledback = "ROLLEDBACK"
,    Suspended = "SUSPENDED"
}


// GoogleCloudIntegrationsV1alphaTaskExecutionDetails
/** 
 * Contains the details of the execution of this task.
**/
export class GoogleCloudIntegrationsV1alphaTaskExecutionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=taskAttemptStats", elemType: shared.GoogleCloudIntegrationsV1alphaAttemptStats })
  taskAttemptStats?: GoogleCloudIntegrationsV1alphaAttemptStats[];

  @Metadata({ data: "json, name=taskExecutionState" })
  taskExecutionState?: GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum;

  @Metadata({ data: "json, name=taskNumber" })
  taskNumber?: string;
}
