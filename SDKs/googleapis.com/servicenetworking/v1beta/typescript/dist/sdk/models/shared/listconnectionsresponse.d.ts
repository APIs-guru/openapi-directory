import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicenetworkingV1betaConnection } from "./googlecloudservicenetworkingv1betaconnection";
/**
 * ListConnectionsResponse is the response to list peering states for the given service and consumer project.
**/
export declare class ListConnectionsResponse extends SpeakeasyBase {
    connections?: GoogleCloudServicenetworkingV1betaConnection[];
}
