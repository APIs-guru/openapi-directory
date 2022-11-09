import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaAttemptStats } from "./googlecloudintegrationsv1alphaattemptstats";
import { GoogleCloudIntegrationsV1alphaExecutionSnapshot } from "./googlecloudintegrationsv1alphaexecutionsnapshot";

export enum GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Processing = "PROCESSING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Cancelled = "CANCELLED"
,    RetryOnHold = "RETRY_ON_HOLD"
,    Suspended = "SUSPENDED"
}


// GoogleCloudIntegrationsV1alphaExecutionDetails
/** 
 * Contains the details of the execution info: this includes the tasks execution details plus the event execution statistics.
**/
export class GoogleCloudIntegrationsV1alphaExecutionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=attemptStats", elemType: shared.GoogleCloudIntegrationsV1alphaAttemptStats })
  attemptStats?: GoogleCloudIntegrationsV1alphaAttemptStats[];

  @Metadata({ data: "json, name=executionSnapshots", elemType: shared.GoogleCloudIntegrationsV1alphaExecutionSnapshot })
  executionSnapshots?: GoogleCloudIntegrationsV1alphaExecutionSnapshot[];

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudIntegrationsV1alphaExecutionDetailsStateEnum;
}
