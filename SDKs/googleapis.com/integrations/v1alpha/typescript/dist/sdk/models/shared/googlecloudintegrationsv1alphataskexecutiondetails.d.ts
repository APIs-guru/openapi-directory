import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAttemptStats } from "./googlecloudintegrationsv1alphaattemptstats";
export declare enum GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum {
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
/**
 * Contains the details of the execution of this task.
**/
export declare class GoogleCloudIntegrationsV1alphaTaskExecutionDetails extends SpeakeasyBase {
    taskAttemptStats?: GoogleCloudIntegrationsV1alphaAttemptStats[];
    taskExecutionState?: GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionStateEnum;
    taskNumber?: string;
}
