import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata } from "./googlecloudintegrationsv1alphaexecutionsnapshotexecutionsnapshotmetadata";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
import { GoogleCloudIntegrationsV1alphaTaskExecutionDetails } from "./googlecloudintegrationsv1alphataskexecutiondetails";


// GoogleCloudIntegrationsV1alphaExecutionSnapshot
/** 
 * Contains the snapshot of the execution for a given checkpoint.
**/
export class GoogleCloudIntegrationsV1alphaExecutionSnapshot extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkpointTaskNumber" })
  checkpointTaskNumber?: string;

  @Metadata({ data: "json, name=executionSnapshotMetadata" })
  executionSnapshotMetadata?: GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata;

  @Metadata({ data: "json, name=params", elemType: shared.GoogleCloudIntegrationsV1alphaValueType })
  params?: Map<string, GoogleCloudIntegrationsV1alphaValueType>;

  @Metadata({ data: "json, name=taskExecutionDetails", elemType: shared.GoogleCloudIntegrationsV1alphaTaskExecutionDetails })
  taskExecutionDetails?: GoogleCloudIntegrationsV1alphaTaskExecutionDetails[];
}
