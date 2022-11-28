import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicenetworkingV1betaConnection } from "./googlecloudservicenetworkingv1betaconnection";



// ListConnectionsResponse
/** 
 * ListConnectionsResponse is the response to list peering states for the given service and consumer project.
**/
export class ListConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections", elemType: GoogleCloudServicenetworkingV1betaConnection })
  connections?: GoogleCloudServicenetworkingV1betaConnection[];
}
