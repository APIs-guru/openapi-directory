import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata } from "./googlecloudintegrationsv1alphaexecutionsnapshotexecutionsnapshotmetadata";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
import { GoogleCloudIntegrationsV1alphaTaskExecutionDetails } from "./googlecloudintegrationsv1alphataskexecutiondetails";



// GoogleCloudIntegrationsV1alphaExecutionSnapshot
/** 
 * Contains the snapshot of the execution for a given checkpoint.
**/
export class GoogleCloudIntegrationsV1alphaExecutionSnapshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkpointTaskNumber" })
  checkpointTaskNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=executionSnapshotMetadata" })
  executionSnapshotMetadata?: GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata;

  @SpeakeasyMetadata({ data: "json, name=params", elemType: GoogleCloudIntegrationsV1alphaValueType })
  params?: Map<string, GoogleCloudIntegrationsV1alphaValueType>;

  @SpeakeasyMetadata({ data: "json, name=taskExecutionDetails", elemType: GoogleCloudIntegrationsV1alphaTaskExecutionDetails })
  taskExecutionDetails?: GoogleCloudIntegrationsV1alphaTaskExecutionDetails[];
}
