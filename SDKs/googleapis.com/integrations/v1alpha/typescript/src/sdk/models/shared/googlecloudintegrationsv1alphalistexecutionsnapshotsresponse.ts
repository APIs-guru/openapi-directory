import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoEventExecutionSnapshot } from "./enterprisecrmeventbusprotoeventexecutionsnapshot";



// GoogleCloudIntegrationsV1alphaListExecutionSnapshotsResponse
/** 
 * Response for listing the integration execution snapshot.
**/
export class GoogleCloudIntegrationsV1alphaListExecutionSnapshotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionSnapshots", elemType: EnterpriseCrmEventbusProtoEventExecutionSnapshot })
  executionSnapshots?: EnterpriseCrmEventbusProtoEventExecutionSnapshot[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
