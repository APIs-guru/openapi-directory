import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata } from "./googlecloudintegrationsv1alphaexecutionsnapshotexecutionsnapshotmetadata";
import { GoogleCloudIntegrationsV1alphaValueType } from "./googlecloudintegrationsv1alphavaluetype";
import { GoogleCloudIntegrationsV1alphaTaskExecutionDetails } from "./googlecloudintegrationsv1alphataskexecutiondetails";
/**
 * Contains the snapshot of the execution for a given checkpoint.
**/
export declare class GoogleCloudIntegrationsV1alphaExecutionSnapshot extends SpeakeasyBase {
    checkpointTaskNumber?: string;
    executionSnapshotMetadata?: GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata;
    params?: Map<string, GoogleCloudIntegrationsV1alphaValueType>;
    taskExecutionDetails?: GoogleCloudIntegrationsV1alphaTaskExecutionDetails[];
}
