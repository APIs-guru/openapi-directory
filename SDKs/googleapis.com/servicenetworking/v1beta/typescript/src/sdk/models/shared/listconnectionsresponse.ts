import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudServicenetworkingV1betaConnection } from "./googlecloudservicenetworkingv1betaconnection";


// ListConnectionsResponse
/** 
 * ListConnectionsResponse is the response to list peering states for the given service and consumer project.
**/
export class ListConnectionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections", elemType: shared.GoogleCloudServicenetworkingV1betaConnection })
  connections?: GoogleCloudServicenetworkingV1betaConnection[];
}
