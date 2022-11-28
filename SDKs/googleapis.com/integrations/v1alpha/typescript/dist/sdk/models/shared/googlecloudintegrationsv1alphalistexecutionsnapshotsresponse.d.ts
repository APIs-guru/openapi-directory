import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoEventExecutionSnapshot } from "./enterprisecrmeventbusprotoeventexecutionsnapshot";
/**
 * Response for listing the integration execution snapshot.
**/
export declare class GoogleCloudIntegrationsV1alphaListExecutionSnapshotsResponse extends SpeakeasyBase {
    executionSnapshots?: EnterpriseCrmEventbusProtoEventExecutionSnapshot[];
    nextPageToken?: string;
}
