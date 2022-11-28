import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAttemptStats } from "./googlecloudintegrationsv1alphaattemptstats";


export enum GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum {
    TaskExecutionStateUnspecified = "TASK_EXECUTION_STATE_UNSPECIFIED",
    PendingExecution = "PENDING_EXECUTION",
    InProcess = "IN_PROCESS",
    Succeed = "SUCCEED",
    Failed = "FAILED",
    Fatal = "FATAL",
    RetryOnHold = "RETRY_ON_HOLD",
    Skipped = "SKIPPED",
    Cancelled = "CANCELLED",
    PendingRollback = "PENDING_ROLLBACK",
    RollbackInProcess = "ROLLBACK_IN_PROCESS",
    Rolledback = "ROLLEDBACK",
    Suspended = "SUSPENDED"
}


// GoogleCloudIntegrationsV1alphaTaskExecutionDetails
/** 
 * Contains the details of the execution of this task.
**/
export class GoogleCloudIntegrationsV1alphaTaskExecutionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskAttemptStats", elemType: GoogleCloudIntegrationsV1alphaAttemptStats })
  taskAttemptStats?: GoogleCloudIntegrationsV1alphaAttemptStats[];

  @SpeakeasyMetadata({ data: "json, name=taskExecutionState" })
  taskExecutionState?: GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=taskNumber" })
  taskNumber?: string;
}
