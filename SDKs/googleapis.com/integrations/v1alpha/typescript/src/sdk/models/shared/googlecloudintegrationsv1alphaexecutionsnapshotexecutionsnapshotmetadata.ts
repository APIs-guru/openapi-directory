import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata
/** 
 * Metadata of the execution snapshot.
**/
export class GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionAttempt" })
  executionAttempt?: number;

  @Metadata({ data: "json, name=task" })
  task?: string;

  @Metadata({ data: "json, name=taskAttempt" })
  taskAttempt?: number;

  @Metadata({ data: "json, name=taskNumber" })
  taskNumber?: string;
}
