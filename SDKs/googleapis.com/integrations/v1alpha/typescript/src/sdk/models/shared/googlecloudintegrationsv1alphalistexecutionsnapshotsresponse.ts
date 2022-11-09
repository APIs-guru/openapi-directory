import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmEventbusProtoEventExecutionSnapshot } from "./enterprisecrmeventbusprotoeventexecutionsnapshot";


// GoogleCloudIntegrationsV1alphaListExecutionSnapshotsResponse
/** 
 * Response for listing the integration execution snapshot.
**/
export class GoogleCloudIntegrationsV1alphaListExecutionSnapshotsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionSnapshots", elemType: shared.EnterpriseCrmEventbusProtoEventExecutionSnapshot })
  executionSnapshots?: EnterpriseCrmEventbusProtoEventExecutionSnapshot[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
