import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudConnectorsV1Connection } from "./googlecloudconnectorsv1connection";


// GoogleCloudIntegrationsV1alphaListConnectionsResponse
/** 
 * Response containing Connections listed by region.
**/
export class GoogleCloudIntegrationsV1alphaListConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections", elemType: shared.GoogleCloudConnectorsV1Connection })
  connections?: GoogleCloudConnectorsV1Connection[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
