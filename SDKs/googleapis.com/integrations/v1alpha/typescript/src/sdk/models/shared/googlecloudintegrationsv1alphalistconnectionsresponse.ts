import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudConnectorsV1Connection } from "./googlecloudconnectorsv1connection";



// GoogleCloudIntegrationsV1alphaListConnectionsResponse
/** 
 * Response containing Connections listed by region.
**/
export class GoogleCloudIntegrationsV1alphaListConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections", elemType: GoogleCloudConnectorsV1Connection })
  connections?: GoogleCloudConnectorsV1Connection[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
