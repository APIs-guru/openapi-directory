import { SpeakeasyBase } from "../../../internal/utils";
import { PublisherConnection } from "./publisherconnection";
/**
 * A response for the request to approve a batch of publisher connections.
**/
export declare class BatchApprovePublisherConnectionsResponse extends SpeakeasyBase {
    publisherConnections?: PublisherConnection[];
}
