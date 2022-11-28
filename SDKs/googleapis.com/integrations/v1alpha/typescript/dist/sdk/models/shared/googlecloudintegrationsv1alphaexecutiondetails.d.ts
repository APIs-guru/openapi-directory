import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAttemptStats } from "./googlecloudintegrationsv1alphaattemptstats";
import { GoogleCloudIntegrationsV1alphaExecutionSnapshot } from "./googlecloudintegrationsv1alphaexecutionsnapshot";
export declare enum GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Processing = "PROCESSING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED",
    RetryOnHold = "RETRY_ON_HOLD",
    Suspended = "SUSPENDED"
}
/**
 * Contains the details of the execution info: this includes the tasks execution details plus the event execution statistics.
**/
export declare class GoogleCloudIntegrationsV1alphaExecutionDetails extends SpeakeasyBase {
    attemptStats?: GoogleCloudIntegrationsV1alphaAttemptStats[];
    executionSnapshots?: GoogleCloudIntegrationsV1alphaExecutionSnapshot[];
    state?: GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum;
}
