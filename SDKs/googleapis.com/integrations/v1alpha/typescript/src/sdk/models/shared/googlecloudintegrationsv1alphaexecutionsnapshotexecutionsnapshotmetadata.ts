import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata
/** 
 * Metadata of the execution snapshot.
**/
export class GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionAttempt" })
  executionAttempt?: number;

  @SpeakeasyMetadata({ data: "json, name=task" })
  task?: string;

  @SpeakeasyMetadata({ data: "json, name=taskAttempt" })
  taskAttempt?: number;

  @SpeakeasyMetadata({ data: "json, name=taskNumber" })
  taskNumber?: string;
}
