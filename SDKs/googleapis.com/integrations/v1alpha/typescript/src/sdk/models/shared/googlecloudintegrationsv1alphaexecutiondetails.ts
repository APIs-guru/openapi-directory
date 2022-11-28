import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaAttemptStats } from "./googlecloudintegrationsv1alphaattemptstats";
import { GoogleCloudIntegrationsV1alphaExecutionSnapshot } from "./googlecloudintegrationsv1alphaexecutionsnapshot";


export enum GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Processing = "PROCESSING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED",
    RetryOnHold = "RETRY_ON_HOLD",
    Suspended = "SUSPENDED"
}


// GoogleCloudIntegrationsV1alphaExecutionDetails
/** 
 * Contains the details of the execution info: this includes the tasks execution details plus the event execution statistics.
**/
export class GoogleCloudIntegrationsV1alphaExecutionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attemptStats", elemType: GoogleCloudIntegrationsV1alphaAttemptStats })
  attemptStats?: GoogleCloudIntegrationsV1alphaAttemptStats[];

  @SpeakeasyMetadata({ data: "json, name=executionSnapshots", elemType: GoogleCloudIntegrationsV1alphaExecutionSnapshot })
  executionSnapshots?: GoogleCloudIntegrationsV1alphaExecutionSnapshot[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum;
}
